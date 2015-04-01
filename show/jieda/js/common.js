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

function p_change(){
	for(var j = 0;j < excel.length;j ++){
		$('#province').append($("<option value='" + excel[j].pId + "'>" + excel[j].pName + "</option>"));
	}
	$("#city").html('<option value="">请选择</option>');
    c_change();
    $("#jxs").html('<option value="">请选择</option>');
    d_change();
}

function c_change(){
	for(var j = 0;j < excel.length;j ++){
		if(parseInt($("#province").val()) == excel[j].pId){
			for(var i = 0;i < excel[j].Cities.length;i ++){
				$('#city').append($("<option value='" + excel[j].Cities[i].cId + "'>" + excel[j].Cities[i].cName + "</option>"));
			}
		}
	}
	$("#jxs").html('<option value="">请选择</option>');
	d_change();
}
function d_change(){
	     for (var j = 0; j < excel.length; j++) {
        if (parseInt($("#province").val()) == excel[j].pId) {
             for (var i = 0; i < excel[j].Cities.length; i++) {
                if (parseInt($("#province").val()) == excel[j].pId && parseInt($("#city").val()) == excel[j].Cities[i].cId) {
                    for (var k = 0; k < excel[j].Cities[i].Dealers.length; k++) {
                        $("#jxs").append($("<option value='" + excel[j].Cities[i].Dealers[k].dCode + "'>" + excel[j].Cities[i].Dealers[k].dName + "</option>"));
                    }
                }   
            }  
        }
    }
}
try{$("#province").onclick=p_change()}catch(err){};
function isnull()
     	{
     	var name=eval(document.getElementById('name')).value;
          if(name !== null && name !== "")
          {
               
               return true;
          }
          else
          {
              alert('请输入姓名！！')
          }
     }
     	function isnull1()
     	{
     	var province=eval(document.getElementById('province')).value;
          if(province !== null && province !== "")
          {
               
               return true;
          }
          else
          {
              alert('请选择省份！！')
          }
     }
     	function isnull2()
     	{
     	var city=eval(document.getElementById('city')).value;
          if(city !== null && city !== "")
          {
               
               return true;
          }
          else
          {
              alert('请选择城市！！')
          }
     }
     	function isnull3()
     	{
     	var jxs=eval(document.getElementById('jxs')).value;
          if(jxs !== null && jxs !== "")
          {
               
               return true;
          }
          else
          {
              alert('请选择经销商！！')
          }
     }
function isphone()
     	{
     	var phone=eval(document.getElementById('phone')).value;
          var partten = /^1[3,5,8]\d{9}$/;
          var fl=false;
          if(partten.test(phone))
          {
               //alert('是手机号码');
               return true;
          }
          else
          {
               //return false;
               alert('请正确输入手机号码！！');
               return false;
          }
     }

function submit1(){
     var mobile=$('#phone').val();
     var realname=$('#name').val();
     var provinceid=$('#province').val();
     var cityid=$('#city').val();
     var dealerid=$('#jxs').val();
     var expand1=$('#sjcx').val();
     var expand2=$('#cxxx').val();
     var expand3=$('#time').val();
     var expand4=$('#jxs').find("option:selected").text();
     $.ajax({
	 type: 'POST', 
	url:"http://ama.adwo.com/advmessage/adv/addResultJsonP.action?advid=30164&realname="+ realname+"&mobile="+mobile+"&provinceid="+provinceid+"&cityid="+cityid+"&dealerid="+dealerid+"&expand1="+expand1+"&expand2=" + expand2 +"&expand3="+expand3+"&expand4="+expand4+ "&provincename=" + $("#province").find("option:selected").text() + "&cityname=" + $("#city").find("option:selected").text(),
	dataType: 'jsonp',
	success: function(data) {
                if(data[0].success == 1) {
                	 //alert(s);
                    alert("预约成功!");
                } else {
                	//alert(s);
                    alert("预约失败!");
                }
            },
       error:function() {
            alert('抱歉，提交失败');
	}
	});	
     	}