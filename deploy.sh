#!/bin/bash
npm install
npm run build


git branch -D gh-pages 
git branch -b gh-pages