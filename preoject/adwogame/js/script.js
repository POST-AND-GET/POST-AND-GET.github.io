$(document).ready(function () {
	function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var name,icon,recommend,type,size,operators,support,version,text;
var img = [];
var downloadurl = [];
var downloadimg = [];
var id = getQueryString("id");
for(var i = 0; i<data.length;i++){
    if(data[i].id == id){
       name = data[i].name;
       icon = data[i].icon;
       img = data[i].img;
       recommend = data[i].recommend;
       downloadurl = data[i].downloadurl;
       downloadimg = data[i].downloadimg;
       type = data[i].type;
       size = data[i].size;
       operators = data[i].operators;
       support = data[i].support;
       version = data[i].version;
       text = data[i].text;
    }
}
$("title").html(name+"-安沃游戏");
$("#name").html(name);
$("#name1").html(name);
$("#name2").html(name);
$("#type").html(type);
$("#size").html(size);
$("#operators").html(operators);
$("#support").html(support);
$("#version").html(version);
$("#text").html(text);
$(".icon>img").attr("src",icon);
$(".downloadimg>img").attr("src",downloadimg[0]);
var html="";
for(var i=0; i<img.length;i++){
	html += '<li class="show-poster-3"><a href="#" class="img" ><img src="'+img[i]+'" style="display: inline-block;" original="'+img[i]+'"/></a></li>'
	
}
$(".drama-poster>ul").html(html);

$(".downloadurl>a").attr("href",downloadurl[0]);
/*console.log(name);
console.log(icon);
console.log(img);
console.log(recommend);
console.log(downloadurl);
console.log(downloadimg);
console.log(type);
console.log(size);
console.log(operators);
console.log(support);
console.log(version);
console.log(text);
	*/
	
	setTimeout(function(){
		var imgW = $(".img img").width();
	var imgH = $(".img img").height();
	if (imgW<imgH) {$(".drama-poster ul").css("left","-144px");$(".drama-poster").css("margin-top","17px")};
	if (imgW>imgH) {$(".drama-poster ul").css({"left":"-191px","top":"57px"});$(".drama-poster").css("margin-top","70px")};
	},1000);
	
	var html="";
	var n = $(".drama-poster ul li").length;
	for(var i=0 ; i<n;i++){
		html += "<li><\/li>";

	$(".point").html(html);
};
	$(".point li:first").addClass("c");
	
 
});

$(function () {
	var m=0;
	var n = $(".drama-poster ul li").length;
	$(".drama-slide li.next a").click(function () {
		m++;
		if(m==n){m=0}
		var b = $(".drama-poster ul>li:first"); 
		$(".drama-poster ul>li:last").after(b);
		$(".point li").removeClass("c");
		$(".point").find("li").eq(m).addClass("c") 
	});
	$(".drama-slide li.prev a").click(function () {
		if(m==0){m=n}
		m--;
		var c = $(".drama-poster ul>li:last");
		$(".drama-poster ul>li:first").before(c);
		$(".c").removeClass("c");
		$(".point").find("li").eq(m).addClass("c"); 
	}) 
});
