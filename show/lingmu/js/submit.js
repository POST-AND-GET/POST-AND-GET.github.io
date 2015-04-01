function p_change() {
	for (var j = 0; j < data.length; j++) {
		$('#province').append($("<option value='" + data[j].pId + "'>" + data[j].pName + "</option>"));
	}
	$("#city").html('<option value="">--请选择--</option>');
	c_change();
	$("#dealer").html('<option value="">--请选择--</option>');
	d_change();
}

function c_change() {
	for (var j = 0; j < data.length; j++) {
		if (parseInt($("#province").val()) == data[j].pId) {
			for (var i = 0; i < data[j].Cities.length; i++) {
				$('#city').append($("<option value='" + data[j].Cities[i].cId + "'>" + data[j].Cities[i].cName + "</option>"));
			}
		}
	}
	$("#dealer").html('<option value="">--请选择--</option>');
	d_change();
}

function d_change() {
	for (var j = 0; j < data.length; j++) {
		if (parseInt($("#province").val()) == data[j].pId) {
			for (var i = 0; i < data[j].Cities.length; i++) {
				if (parseInt($("#province").val()) == data[j].pId && parseInt($("#city").val()) == data[j].Cities[i].cId) {
					for (var k = 0; k < data[j].Cities[i].Dealers.length; k++) {
						$("#dealer").append($("<option value='" + data[j].Cities[i].Dealers[k].dCode + "'>" + data[j].Cities[i].Dealers[k].dName + "</option>"));
					}
				}
			}
		}
	}
}
p_change();

function n_isnull() {
	var name = eval(document.getElementById('name')).value;
	if (name !== null && name !== "") {

		return true;
	} else {
		alert('请输入姓名！！')
	}
}

function p_isnull() {
	var city = eval(document.getElementById('province')).value;
	if (city !== null && city !== "") {

		return true;
	} else {
		alert('请选择省！！')
	}
}

function c_isnull() {
	var city = eval(document.getElementById('city')).value;
	if (city !== null && city !== "") {

		return true;
	} else {
		alert('请选择城市！！')
	}
}

function d_isnull() {
	var jxs = eval(document.getElementById('dealer')).value;
	if (jxs !== null && jxs !== "") {

		return true;
	} else {
		alert('请选择经销商！！')
	}
}

function isphone() {
	var phone = eval(document.getElementById('phone')).value;
	var partten = /^(13[0-9]|14(5|7)|15(0|1|2|3|5|6|7|8|9)|177|18[0-9])\d{8}$/;
	var fl = false;
	if (partten.test(phone)) {
		//alert('是手机号码');
		return true;
	} else {
		//return false;
		alert('请正确输入手机号码！！');
		return false;
	}
}

function submit() {
	if (n_isnull() && isphone() && p_isnull() && c_isnull() && d_isnull()) {
		var realname = $('#name').val();
		var mobile = $('#phone').val();
		var provinceid = $('#province').val();
		var provincename = $('#province').find("option:selected").text();
		var cityid = $('#city').val();
		var cityname = $('#city').find("option:selected").text();
//		var dealerid = $('#dealer').val();
		var expand1 = $('#dealer').find("option:selected").text();
		$.ajax({
			type: 'POST',
			url: "http://ama.adwo.com/advmessage/adv/addResultJsonP.action?advid=30207&realname=" + realname + "&mobile=" + mobile + "&expand1=" + expand1 + "&cityname=" + cityname + "&cityid=" + cityid + "&provincename=" + provincename + "&provinceid=" + provinceid,
			dataType: 'jsonp',
			success: function(data) {
				if (data[0].success == 1) {
					//alert(s);
					$(".form").hide();
					$(".success").show();
				} else {
					//alert(s);
					alert("预约失败!");
				}
			},
			error: function() {
				alert('抱歉，提交失败');
			}
		});
	}
}