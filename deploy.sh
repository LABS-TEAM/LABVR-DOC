npm install
npm run build

git branch -D gh-pages
git push origin --delete gh-pages
git branch gh-pages
rm -rf .

mv build/* .
git add . 
git commit -m "deploy $(date +%Y-%m-%d:%H:%M:%S)"
git push origin gh-pages -f

git checkout main