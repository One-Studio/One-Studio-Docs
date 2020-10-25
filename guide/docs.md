---
title: 文档开发&部署
---

## clone仓库

```bash
git clone git@github.com:One-Studio/One-Studio-Docs.git
```

## 安装依赖

```bash
npm install
```



## 提交修改

```bash
git add .

git commit -m "your commit message"

git push
```

## 部署到Pages

```bash
npm run deploy
```

## 文档规范

1. 在每个 .md 文件内头部添加必要的 front matter 信息

   ```md
   ---
   title: Example docs
   ---
   
   ...Write your docs next...
   ```

2. 每个文档标题内容请给二级标题

   ```md
   ## Your haedline
   ```

