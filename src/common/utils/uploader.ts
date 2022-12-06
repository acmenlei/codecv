import { fileMerge, fileUpload } from "@/services/modules/upload";
import { UploadConfig } from "@textbus/editor";
// import OSS from "ali-oss";
import { errorMessage } from "../message";

// function requestCustom(file: File): Promise<string> {
//   // 拿到封面绝对路径 暂时没写
//   return new Promise<string>(async (resolve, reject) => {
//     const { data, code, msg } = await getToken() as IResponse<any>;
//     const { credentials } = data;
//     if (code == 200) {
//       const { res }: any = await aliossFileUpload(file, credentials);
//       resolve(res.requestUrls[0])
//     }
//     reject(msg);
//   })
// }
// 阿里云直传
// async function aliossFileUpload(file: File, config: any) {
//   let client = new OSS({
//     region: config.region,
//     accessKeyId: config.AccessKeyId,
//     accessKeySecret: config.AccessKeySecret,
//     stsToken: config.SecurityToken,
//     bucket: config.bucket,
//   })
//   return new Promise((resolve, reject) => {
//     let fileName = String(Date.now());
//     client.multipartUpload(fileName, file, {
//       progress: (p, checkpoint) => {
//         console.log(p, checkpoint);
//       },
//       mime: file.type,
//     })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err)
//       });
//   })
// }

// 切片上传
export function ImageUpload(file: File) {
  let M = 3, maxSize = 1024 * 1024 * M;
  return new Promise<string>((resolve, reject) => {
    async function upload(index: number) {
      const chunkSize = 1024 * 1024, start = index * chunkSize;
      if (file.size > maxSize) {
        return errorMessage('图片大小不能超过' + M + 'M!');
      }
      const [filename, ext] = file.name.split('.');
      // 进行切片
      if (start > file.size) {
        // 上传完毕了之后进行切片合并
        return merge(file.name, index);
      }
      // 切片为blob
      const blob = file.slice(start, start + chunkSize)
      const blobName = `${filename}.${index}.${ext}`;
      const blobFile = new File([blob], blobName);
      const form = new FormData();
      form.append("file", blobFile)

      try {
        await fileUpload(form);
        upload(++index);
      } catch {
        reject('上传失败了，待会再试试吧～')
      }
    }
    async function merge(name: string, length: number) {
      const data: any = await fileMerge({ name, length });
      if (data.code === 200) {
        resolve(data.url)
      } else {
        reject(data.msg);
      }
    }
    upload(0);
  })
}

export function uploader(config: UploadConfig) {
  switch (config.uploadType) {
    case "image":
      var fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg,image/jpg, image/bmp, image/x-icon');
      fileInput.multiple = config.multiple
      fileInput.style.cssText = 'position: absolute; left: -9999px; top: -9999px; opacity: 0';

      let promise = new Promise<string>(function (resolve) {
        fileInput.addEventListener('change', async function (event) {
          document.body.removeChild(fileInput);
          try {
            const files = (event.target as HTMLInputElement).files as FileList;
            const url = await ImageUpload(files[0]);
            resolve(url)
          } catch (e) {
            errorMessage(<string>e);
          }
        })
      })
      document.body.appendChild(fileInput);
      fileInput.click();
      return promise;
  }
  return String('null');
}