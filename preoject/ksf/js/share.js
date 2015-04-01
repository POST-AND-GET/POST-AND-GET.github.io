var share = document.getElementById("share");
var sharebg = document.getElementById("share-bg");
var bg = document.getElementsByClassName("bg")[0];
var heka = document.getElementsByClassName("heka")[0];
share.addEventListener("click",function(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger"){
		sharebg.style.display = "block";
	}
},false);

document.getElementById("zhizuo").addEventListener("click",function(){
    location.href = 'index.html';
},false);
sharebg.addEventListener("click",function(){
	sharebg.style.display = "none";
	
},false);