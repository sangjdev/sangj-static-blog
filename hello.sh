# echo 'hello world'

git remote rm origin
git remote add origin https://github.com/sangjdev/sangjdev.github.io.git
npm run deploy
git remote rm origin
git remote add origin https://github.com/sangjdev/sangj-static-blog.git
git remote -v