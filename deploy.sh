npm install
npm run build

# git branch -D gh-pages
# git push origin --delete gh-pages
git checkout -b gh-pages
# Delete all files except build folder
find . -maxdepth 1 ! -name 'build' ! -name '.git' ! -name '.github' ! -name '.' ! -name 'CNAME' -exec rm -rf {} \; 

mv build/* .
git add . 
git commit -m "deploy $(date +%Y-%m-%d:%H:%M:%S)"
git push origin gh-pages -f

mkdir build
mv ./* ./build
rm -rf ./build
git checkout main
git add .
git commit -m "clean build"
git push origin main