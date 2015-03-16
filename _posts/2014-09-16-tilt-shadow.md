---
layout: post
title: "翘边相框demo"
category: demo
tags: [css3]
---
这种翘边阴影的实际原理是利用视觉的一种错觉，在实体box下放带有阴影元素

 `box-shadow: h-shadow v-shadow blur spread color inset;`
 *注意：*boxShadow 属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。

|值|说明
|---|:---|---:|:---:|
|h-shadow|必需的。水平阴影的位置。允许负值
|v-shadow|必需的。垂直阴影的位置。允许负值
|blur|可选。模糊距离
|spread|可选。阴影的大小
|color|在CSS颜色值寻找颜色值的完整列表
|inset|可选。从外层的阴影（开始时）改变阴影内侧阴影

**index.html**

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
            <link rel="stylesheet" href="index.css"/>
        </head>
        <body>
            <div class="box">
                
            </div>
            <div class="box_small">
                
            </div>
        </body>
    </html>

**css**

    *{margin: 0;padding: 0; border: none;}
    .box {
        position: relative;
        width: 400px;
        height: 300px;
        background: #CCCCCC;
        margin: 0 auto;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    }
    .box:after {
        content: "";
        position: absolute;
        left: 3%;
        bottom: 0;
        width: 94%;
        height: 50%;
        background: #000000;
        border-radius: 40px;
        box-shadow: 0 0 20px rgba(0,0,0,0.8);
        z-index: -1;
    }
    .box_small {
        position: relative;
        width: 300px;
        height: 200px;
        background: #CCCCCC;
        margin: 40px auto;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    }
    .box_small:before,.box_small:after {
        content: "";
        position: absolute;
        width: 100px;
        height: 180px;
        background: #000000;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
    .box_small:after {
        left: 20px;
        top: 13px;
        transform:skew(-15deg) rotate(-6deg);
        
    }
    .box_small:before {
        right: 20px;
        top: 13px;
        transform:skew(15deg) rotate(6deg);
    }



