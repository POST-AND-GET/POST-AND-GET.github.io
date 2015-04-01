	var name,icon,recommend,type,id;
var downloadurl = [];

setTimeout(function(){
var html1="";
for(var i = 0; i<6;i++){
    	id=data[i].id;
       name = data[i].name;
       icon = data[i].icon;
       recommend = data[i].recommend;
       downloadurl = data[i].downloadurl;
       type = data[i].type;
       html1+='<li><a href="content.html?id='+id+'" title="'+name+'" target="_blank"><img src="'+recommend+'" alt="" /></a><div class="part"><h3>'+name+'</h3><a class="url" href="content.html?id='+id+'" target="_blank">游戏官网</a> <a class="android" href="'+downloadurl[0]+'" title="安卓下载" target="_blank">安卓下载</a><a class="ios" href="'+downloadurl[1]+'" title="ios下载" target="_blank">ios下载</a><span>'+type+'</span></div></li>';
}
$(".gamelist").html(html1);
},100);



