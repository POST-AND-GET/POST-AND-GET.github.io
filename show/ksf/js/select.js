var blesscon ;
var t;
$('#blessItem').bind('change', function() {
blesscon = $("#blessItem").find("option:selected").text();
	
	if(blesscon!='-选择贺卡背景和祝福语'){
		$("#blesscon").html(blesscon);
		t = $("#blesscon").html();
	}
});

var imgsrc;
$(".border").bind("click",function(){
	$(".border").css('border','none');
	this.style.border = "1px #FFF solid";
	imgsrc = this.src;
	
})
$('#makecard').bind("click",function(){
	if(t && imgsrc ){
		location.href = 'heka.html?imgsrc='+encodeURI(imgsrc)+'&text='+encodeURI(blesscon);
	}else{
		alert("请选择背景与祝福语！！");
	}
})