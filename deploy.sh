#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
pnpm run docs:build

# 进入dist
cd src/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f https://gitee.com/bpf-collector/docs.git master:gh-pages

cd -
