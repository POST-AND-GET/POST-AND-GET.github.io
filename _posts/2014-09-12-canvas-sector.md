---
layout: post
title:  "canvas绘制的饼图"
category: demo
tags: [H5]
---
canvas是个不错的家伙，未来有很大的发展空间。

<a href="/demo/canvas-sector/index.html" target="_blank">演示</a>
**html**
    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>饼形图绘制-canvas</title>
    <style>
    #cvs{border:#0F0 solid 1px;margin-left: 25%}
    </style>
    </head>

    <body>
    <canvas id="cvs" width="200" height="200">对不起，您的浏览器不支持canvas</canvas>
    </body>
    <script type="text/javascript" src="secto.js"></script>
    <script type="text/javascript">
    var p = [{'s' : 30,'e' : 111,'c' : '#f00'},
                {'s' : 111,'e' : 233,'c' : '#0f0'},
                {'s' : 233,'e' : 280,'c' : '#789'},
                {'s' : 280,'e' : 345,'c' : '#abcdef'},
                {'s' : 345,'e' : 30,'c' : '#666'}];
    pie('cvs',100,100,80,p);
    </script>
    </html>

    **secto.js**

    CanvasRenderingContext2D.prototype.sector = function sector(x, y, radius, sDeg, eDeg,color) {
    Angle = Math.PI/180;
    this.beginPath();
    this.moveTo(0, 0);
    this.arc(0, 0, radius, sDeg*Angle, eDeg*Angle);
    this.closePath();
    this.fillStyle = color;
    this.fill();
    return this;
    };
    function pie(id,x,y,R,P){
        var cvs = document.getElementById(id);
        var ctx = cvs.getContext('2d');
        ctx.translate(x, y);
        for (var i = 0; i < P.length; i++) {
            ctx.sector(x,y,R,P[i].s,P[i].e,P[i].c);
        }
    }


