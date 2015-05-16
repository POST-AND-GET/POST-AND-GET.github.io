---
layout: post
title: "artTemplate新一代 javascript 模板引擎"
category: js
tags: [js,js模板引擎]
---
大学的时候就了解到了这个js模板引擎，可是就是一直用不上，点击<a href="https://github.com/aui/artTemplate" target="_blank">artTemplate</a>可以查看github项目，然后也可以看看https://github.com/aui，他的其他项目，也挺不错，就是artTemplate更新放缓，最早的时间是9月之前。具体介绍请到项目首页

<!-- more -->
这段时间做公司的项目需要对接接口然后把数据用js添加到html中去，数据挺多，这时候我就想到了它，它的语法分为两种，原生和简洁版，个人比较喜欢简洁版大小才相差0.4kb，然后用cdn的话就可以忽略这个大小了，里面的each循环嵌套非常爽，还有if判断，然后数据要在之前处理好，	{{each list as value index}}我喜欢这个each因为这个有点像php中的foreach，哈哈~~，不多讲，可以慢慢体会这个引擎。



