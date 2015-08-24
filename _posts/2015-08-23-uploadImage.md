---
layout: post
title: "上传照片加预览（canvas）"
category: html5
tags: [上传照片]
---
忙了将近一个月的广告项目，累的半死，不过有很多收获，近期整理一下。

先写个上传照片的吧。

首先上传这种东西应该属于输入，所以我们要用input，input里面有个类型是file的可以上传文件，`<input type="file" accept="image/*"/>`

<!-- more -->
但是直接用input样式会很不好看的，所以我们要模拟点击

    function doInput(id){
        var inputObj = document.createElement('input');
        inputObj.addEventListener('change',readFile,false);
        inputObj.type = 'file';
        inputObj.accept = 'image/*';
        inputObj.id = id;
        inputObj.click();
    }

上面函数中点击input，然后监听change，选择图片之后会执行readFile函数

    function readFile(){
        var file = this.files[0];//获取input输入的图片
        if(!/image\/\w+/.test(file.type)){
            alert("请确保文件为图像类型");
            return false;
        }//判断是否图片，在移动端由于浏览器对调用file类型处理不同，虽然加了accept = 'image/*'，但是还要再次判断
        var reader = new FileReader();
        reader.readAsDataURL(file);//转化成base64数据类型
        reader.onload = function(e){
                drawToCanvas(this.result);
            }
        }
    }

然后预览，用了一个drawToCanvas函数来将转化后的base64数据写到canvas，虽然可以直接用img标签直接显示，但是总是感觉显示会很慢

    function drawToCanvas(imgData){
        var cvs = document.querySelector('#cvs');
            cvs.width=300;
            cvs.height=400;
            var ctx = cvs.getContext('2d');
            var img = new Image;
                img.src = imgData;
                img.onload = function(){//必须onload之后再画
                    ctx.drawImage(img,0,0,300,400);
                    strDataURI = cvs.toDataURL();//获取canvas base64数据
                }
    }

这里说一点每次给canvas重新width和height时画布会重新绘制，也就是init了，还有用css给canvas高宽和字标签设置是不一样的，可以自行百度