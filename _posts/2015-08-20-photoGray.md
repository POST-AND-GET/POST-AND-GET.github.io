---
layout: post
title: "一个需求理解错的成果-照片变灰"
category: html5
tags: [照片色彩转换]
---
作为一个只会切图和简单编辑psd的前端来说，想用ps将一个图片变灰真tm的难啊，做项目的时候以为是把某个图片由会变成原图，结果就用canvas生成了灰色的图片，然后用css3的animation来渐变，实际上是整个页面几张图片的切换，但是自己get了一个新技能

<!-- more -->

    function drawImages(imgsrc,canvas){
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = imgsrc;
        img.onload = function(){
            ctx.drawImage(img,0,0,268,272);
            img = ctx.getImageData(0, 0, 268, 272);
            for (var i = 0; i < 268 * 272 * 4; i += 4) {
                var myRed = img.data[i];
                var myGreen = img.data[i + 1];
                var myBlue = img.data[i + 2];
                var myGray = parseInt((myRed + myGreen + myBlue) / 3);
                img.data[i] = myGray;
                img.data[i + 1] = myGray;
                img.data[i + 2] = myGray;
            }
            ctx.putImageData(img, 0, 0);
        }
    
    }
