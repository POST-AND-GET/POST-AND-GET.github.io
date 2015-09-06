---
layout: page
title: "Function"
description: "安志清的函数库"
---

*获取根目录地址*

	function getRootPath(){
		var strFullPath=window.document.location.href;
		var strPath=window.document.location.pathname;
		var pos=strFullPath.indexOf(strPath);
		var prePath=strFullPath.substring(0,pos);
		var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
		return(prePath+postPath);
	}

- - -	
*js获取url中的参数*

	function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return decodeURI(r[2]);
	    return null;
	}

- - -
*判断浏览器是否支持ajax并返回一个能用的这个实例*

	function xmlHttp(){
		var xmlHttp;
		try { xmlHttp = new XMLHttpRequest(); }
		   catch( e ){
		       try { xmlHttp = new ActiveXObject( "Msxml2.XMLHTTP" );}
		       catch ( e ){
		           try { xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );}
		           catch( e ) { alert("您的浏览器不支持AJAX！");return false;}
		    }
		}
		return xmlHttp;
	}

- - -
*ajax异步的GET方式，前提有xmlHttp()函数*

	function ajaxGet(url,fnSucc,fnFaild){
	    var timeout,xmlHttp = xmlHttp();
	    xmlHttp.open('GET',url,true);
	    xmlHttp.send(); 
    	xmlHttp.onreadystatechange = function (){
        if (xmlHttp.readyState == 4){
            clearTimeout (timeout); 
            if (xmlHttp.status == 200){
                fnSucc(xmlHttp.responseText);
            }else {
                if (fnFaild) {
                    fnFaild(xmlHttp.status);
                }
            }
        }
	    timeout = setTimeout( function (){
	        xmlHttp.abort(); 
	        fnFaild ('请求超时！！'); 
	    },1000 * 30); 
	}

- - -
*ajax异步的POST方式，前提有xmlHttp()函数* 

	function ajaxPost(url,json,fnSucc,fnFaild){
	    var timeout,xmlHttp = xmlHttp();
	    xmlHttp.open('POST',url,true);
	    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    	xmlHttp.onreadystatechange = function (){
	        if ( xmlHttp.readyState == 4){
	            clearTimeout (timeout); 
	            if (xmlHttp.status == 200){
	                nSucc(xmlHttp.responseText);
	            }else {
	                if(fnFaild) {
	                	fnFaild(xmlHttp.status);
	                }
	            }
	        }
	    }
        xmlHttp.send('tmpKey='+JSON.stringify(json));
	    timeout = setTimeout( function (){
	        xmlHttp.abort(); 
	        fnFaild ('请求超时！！'); 
	    },1000 * 30); 
	}

- - -
*利用script的跨域，并自动写到全局的返回函数*

    function Ajax(url,json,fn){
        var d = new Date().getTime();
        eval("window.ajax_"+d+"= fn;");
        url = url+"?callback=ajax_"+d;
        if (json && json.lenght>0) {
            for(var item in json){
                url+= "&"+item +"="+json[item];
            }
        }
        var script = document.createElement('script');  
        script.setAttribute("type","text/javascript");  
        script.src = url;  
        document.body.appendChild(script);
        script.remove();
    }
    
- - -
*数组随机和排序*

	//随机取得数组中的一个
	function arrRandom(arr){
		var n = Math.floor(Math.random() * arr.length + 1)-1;
		return arr[n]
	}
	//随机排序整个数组
	function arrOrder(arr){
		arr.sort(function(){return Math.random()>0.5?-1:1;});  
        return arr;
	}
	
- - -
*获取当前根目录*

	function nowUrl(){
		var a = window.location.href;
		var b = a.split('//')[1].split('/');
		var c = b.length-1;
		var d = b[c];
		return a.replace(d,'');
	}
		
- - -
*删除数组指定值*

	Array.prototype.indexOf = function(val) {
		for (var i = 0; i < this.length; i++) {
		    if (this[i] == val) return i;
		}
		return -1;
	};
	Array.prototype.remove = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
		    this.splice(index, 1);
		}
	};
	//举个栗子：var emp = ['abs','dsf','sdf','fd'] ;emp.remove('fd'); 
	
{% include comments.html %}
