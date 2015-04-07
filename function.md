---
layout: page
title: "Function"
description: "安志清的函数库"
---

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


{% include comments.html %}
