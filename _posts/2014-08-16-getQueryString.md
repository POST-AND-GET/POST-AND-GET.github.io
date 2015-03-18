---
layout: post
title: "js获取url中的参数"
category: js
tags: [js]
---
有的时候不是特别重要的数据要通过url在各个页面进行传递，这个时候就需要我们通过js来获取url中的参数了。


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
<!-- more -->
 *用法：*
 举例：url：www.xxx.com?s=xxx。
 var s = getQueryString(“s”);//获取到xxx
 decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码。


