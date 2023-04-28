#!/bin/bash 

# clean previous dist directory
rm -rf dist

# run build script to generate static assets
npm run build

#deploy to gh-pages subtree branch
git add dist -f
git commit -m "updating gh-pages branch for new release $(date +%Y%m%d)"

git subtree push --prefix dist https://github.com/williamwongacd/williamwong-studio.git master
# git subtree push --prefix dist origin gh-pages
