npm install
npm run build

git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
rm -rf ./*

mv build/* .
git add . 
git commit -m "deploy $(date +%Y-%m-%d:%H:%M:%S)"
git push origin gh-pages -f

rm -rf ./build
git checkout main
git add .
git commit -m "clean build"
git push origin main