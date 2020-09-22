@echo off

echo building...
call build.bat
echo building-complete.

git init
git add -A
git commit -m 'auto-deploy'
git remote add origin https://gitee.com/luna_nov/blog.git
git remote add github https://github.com/czy1024/blog.git

git pull
git push --force origin HEAD:gh-pages
git push --force github HEAD:gh-pages

echo Auto-Deploy-Complete!
pause