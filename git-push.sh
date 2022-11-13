echo "\033[32m <<<<<<<<< 正在拉取Github仓库远程代码... >>>>>>>>> \033[0m"
git pull origin master

echo "\033[32m <<<<<<<<< 正在添加文件... >>>>>>>>> \033[0m"
git add .

echo "\033[33m <<<<<<<<< 请填写备注信息（可为空: >>>>>>>>> \033[0m"
read remarks
if [ ! -n "$remarks" ]
then
	remarks="deploy: 常规提交部署"
fi

git commit -m "$remarks"

echo "\033[32m <<<<<<<<< 正在提交Github仓库代码... >>>>>>>>> \033[0m"
git push origin master

exit