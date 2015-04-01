function resetPage() {
	var deviceWidth = document.documentElement.clientWidth,
		scale = deviceWidth / 320;
	document.body.style.zoom = scale;

}
window.onresize = function() {
	resetPage();
};
var channel = 20;
var yy = document.getElementById('yy');
var cx = document.getElementById('cx');
var info = document.getElementById('info');
var yulu = document.getElementById('yulu');
yy.onclick = function(){
	setTimeout(function(){location.href = 'yuyue.html'},100);
};
cx.onclick = function(){
	setTimeout(function(){location.href = 'chexing.html'},100);
};
info.onclick = function(){
	setTimeout(function(){location.href = 'info.html'},100);
};
yulu.onclick = function(){
	setTimeout(function(){location.href = 'yulu.html'},100);
};



function p_change1() {
	for (var j = 0; j < excel1.length; j++) {
		$('#province1').append($("<option value='" + excel1[j].areaid + "'>" + excel1[j].areaname + "</option>"));
	}
	$("#city1").html('<option value="">请选择</option>');
	c_change1();

}

function c_change1() {
	for (var j = 0; j < excel1.length; j++) {
		if (parseInt($("#province1").val()) == excel1[j].areaid) {
			for (var i = 0; i < excel1[j].cities.length; i++) {
				$('#city1').append($("<option value='" + excel1[j].cities[i].areacityid + "'>" + excel1[j].cities[i].areacityname + "</option>"));
			}
		}
	}


}
p_change1();


function submit2() {
	var provinceid = $('#province1').val();
	var cityid = $('#city1').val();

	$.ajax({
		type: 'GET',
		url: "http://ama.adwo.com/advmessage/dealer/getDealerByAreaIdJsonP.action?advid=30164& provinceid=" + provinceid + "&cityid=" + cityid + "&limit=100",
		dataType: 'jsonp',
		success: function(data) {
			if (data[0].length !== 0) {
				
				var html1 = '';
				
				for (var i = 1; i < data[0].length+1; i++) {
					html1 += '<li id="list"><span>'+i+'</span><div><h4>'+data[0][i-1].dealerName+'</h4><p>'+data[0][i-1].dealerAddress+'</p><p>'+data[0][i-1].dealerTel+'</p></div></li>';
//					
//
//					console.log(data[0][i-1].dealerName);
//					console.log(data[0][i-1].dealerAddress);
//					console.log(data[0][i-1].dealerTel);
//					
				}
				$('.info').html(html1);
			} else {

				alert("查询失败!");
			}
		},
		error: function() {
			alert('抱歉，查询失败');
		}
	});
}