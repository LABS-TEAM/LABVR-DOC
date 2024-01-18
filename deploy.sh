npm install
npm run build


git branch -D gh-pages 
git push origin --delete gh-pages
git checkout --orphan gh-pages

git add build/* 
git commit -m "deploy $(date +%Y-%m-%d:%H:%M:%S)"
git push origin gh-pages -f
