---
title: create-your-own-blog
published: 2026-05-30
description: ""
image: ""
tags: [建站, 博客]
category: "教程"
draft: true
lang: ""
---

# 开始

你是否想和我一样拥有一个自己的博客呢，本篇文章将会教你通过两种方式来搭建属于自己的博客。

首先你需要选择想要搭建博客的类型，这里共有两种选择~

| 对比维度     | WordPress（动态 CMS）                                                                                                                         | Hexo（静态网站生成器）                                                                                                                                              |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **核心定位** | 功能完整的动态内容管理系统，适合博客、企业站、电商等                                                                                          | 基于 Node.js 的静态博客生成器，偏向个人博客与技术文档                                                                                                               |
| **主要优点** | ✅ 开箱即用，自带 Web 后台<br>✅ 插件/主题生态极其丰富<br>✅ 支持多用户、评论、搜索、表单等动态功能<br>✅ 非技术人员友好                      | ✅ 纯静态页面，访问速度极快<br>✅ 无数据库，安全性高<br>✅ 可免费托管（GitHub Pages / Vercel / Netlify）<br>✅ 对 CDN 和 SEO 友好<br>✅ Markdown 写作，Git 版本管理 |
| **主要不足** | ❌ 需要服务器 + 数据库，运维成本较高<br>❌ 动态页面对服务器资源有要求<br>❌ 需定期维护安全、更新插件和核心<br>❌ 默认不适合纯 Markdown 写作流 | ❌ 无原生后台，多设备写作需同步环境<br>❌ 动态功能依赖第三方服务（评论、搜索等）<br>❌ 对新手有一定技术门槛<br>❌ 每次更新需重新生成并部署                          |
| **部署环境** | - Web 服务器（Nginx / Apache）<br>- PHP + MySQL / MariaDB<br>- 支持一键安装（LAMP / WAMP / 宝塔）                                             | - 本地：Node.js + Git<br>- 生成后为纯静态文件<br>- 可部署至 GitHub Pages / Vercel / Netlify / OSS + CDN                                                             |

以上为两个类型的区别及优劣点，大家可根据自己需求和喜好进行选择~

# WordPress篇

> [!NOTE]
> 这个写起来有点麻烦，暑假再写吧。~~（咕咕咕）~~

# Hexo篇

本篇以Windows系列系统作为演示，其他系统大差不差，动手能力强的猫猫建议查阅官方文档~

## 准备工作

需要的环境有：

- [Node.js](https://nodejs.org/zh-cn)(最低版本10.13，建议使用12.0及以上版本)
- [Git](https://git-scm.com/)

> [!NOTE]
> 在Windows环境下安装Node.js时，请确保勾选 Add to PATH 选项（默认已勾选）

安装完毕后，建议按键盘上的 <iconify-icon icon="basil:windows-solid"></iconify-icon> + `R` 打开「运行」，然后输入`cmd`或`powershell`打开终端分别输入`git --version`和`node --version`查看是否安装完成，若能看到类似下图所示的内容，恭喜你安装完成🎉

![Nya](FF5FEF02A6C4434D84EDC8FBD947442A.png)

## 安装Hexo

> [!IMPORTANT]
> 注意，本章节下所有命令均在上文中提到的`终端`中完成。

所有必备的应用程序安装完成后，即可使用`npm`安装`Hexo`。

```bash
npm install -g hexo-cli
```

## 建站

我们可以使用`hexo init`创建一个新的`Hexo`博客项目：

```bash
# 这里的 my-blog 是你的博客项目名称
hexo init my-blog
```

然后，进入博客目录

```bash
cd my-blog
```

所需要的依赖在`hexo init`的时候就已经安装了，我们这里可以先开启本地服务器看一下博客页面：

```bash
# hexo sever 与它一样
hexo s
```

如果没什么问题访问<http://localhost:4000>应该是如下图，正常显示：

![def_blog](QQ20260523-223651.png)

默认主题太丑了，让我们给它换上[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)主题

## 安装主题
