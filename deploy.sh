npm install
npm run build

git push origin --delete gh-pages
git branch gh-pages

git add build/* 
git commit -m "deploy $(date +%Y-%m-%d:%H:%M:%S)"
git push origin gh-pages -f

git checkout main