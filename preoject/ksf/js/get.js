function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
var imgsrc = getQueryString('imgsrc');
var t = getQueryString('text');
var k = getQueryString('k');
var f = getQueryString("from");
if (k == '0' || f) {
    document.getElementById("zhizuo").style.display = "block";
    document.getElementById("share").style.display = "none";
}
if(imgsrc && t) {
	document.getElementById("t").innerHTML = t;
	document.getElementById("hekabg").src = imgsrc;
}else{
	alert("请制作您的专属贺卡！");
	location.href ='index.html';
}
