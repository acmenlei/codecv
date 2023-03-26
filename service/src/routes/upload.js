const express = require("express"),
  multiparty = require("multiparty"),
  fse = require("fs-extra"),
  path = require("path"),
  fs = require("fs"),
  { STS } = require("ali-oss"),
  router = express.Router(),
  Tip = require('../common/tip/tip')
config = require("../common/alioss/config");

const { domain } = require('../common/domain')

const UPLOAD_DIR = path.resolve(__dirname, '../', "upload")

router.post("/upload", async function (req, res) {
  const form = new multiparty.Form({ uploadDir: 'temp' });
  form.parse(req);
  /**
   * name 前端formData append的key
   * chunk 前端formData append的value
   */
  form.on('file', async function (name, chunk) {
    // 存放切片的目录 filename.index.ext (存放在/public/upload/originalFilename)
    const chunkDir = `${UPLOAD_DIR}/${chunk.originalFilename.split(".")[0]}`
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }
    // 按照索引编号index再次命名
    const dPath = path.join(chunkDir, chunk.originalFilename.split(".")[1])
    // 将上传的文件移动到我们的新目录下
    await fse.move(chunk.path, dPath, { overwrite: true })
    // 给出提示
    res.json({ code: 200, msg: "上传完毕" })
  })
})

router.post("/merge", async function (req, res) {
  const { name, length } = req.body;
  const fname = name.split(".")[0];
  // 拿到资源目录的所有切片
  let chunkDir = path.join(UPLOAD_DIR, fname);
  let chunks = await fse.readdir(chunkDir)
  let fileName = path.join(UPLOAD_DIR, name), lastSplit = fileName.lastIndexOf('.');
  const LAST_FILE_NAME = fileName.slice(0, lastSplit) + Date.now() + '.' + fileName.slice(lastSplit + 1);

  chunks.sort((a, b) => a - b).map(chunk => {
    fs.appendFileSync(LAST_FILE_NAME, fs.readFileSync(`${chunkDir}/${chunk}`));
  })

  // 删除临时文件
  fse.removeSync(chunkDir);

  return res.json({ code: 200, msg: "上传成功", url: `http://${domain}:3001/upload/${LAST_FILE_NAME.split('/').slice(-1)}` })
})


router.post('/getToken', async (request, response) => {
  const client = new STS({
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret
  });
  try {
    const data = await client.assumeRole(config.roleArn, config.policy);
    data.credentials.region = config.region;
    data.credentials.bucket = config.bucket;
    return response.json({ code: 200, data, msg: Tip.OPERATOR_OK })
  } catch {
    return response.json({ code: -999, msg: Tip.OPERATOR_ERROR })
  }
});

module.exports = router;