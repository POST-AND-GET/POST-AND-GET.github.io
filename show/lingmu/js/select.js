function p_change(){
	for(var j = 0;j < data.length;j ++){
		$('#province').append($("<option value='" + data[j].pId + "'>" + data[j].pName + "</option>"));
	}
	$("#city").html('<option value="">--请选择--</option>');
    c_change();
}

function c_change(){
	for(var j = 0;j < data.length;j ++){
		if(parseInt($("#province").val()) == data[j].pId){
			for(var i = 0;i < data[j].Cities.length;i ++){
				$('#city').append($("<option value='" + data[j].Cities[i].cId + "'>" + data[j].Cities[i].cName + "</option>"));
			}
		}
	}
}
p_change();

$("#submit").click(function(){
var provinceid = $('#province').val();
var cityid = $('#city').val();
var html ="";
	for(var i = 0; i<data.length;i++){
    if(data[i].pId == provinceid){
    	for (var j = 0 ;j<data[i].Cities.length;j++) {
    		if(data[i].Cities[j].cId == cityid)
    		for (var m=0;m<data[i].Cities[j].Dealers.length;m++) {
    			html+='<div class="one"><span>'+data[i].Cities[j].Dealers[m].dName+'</span></div>'
    		}
    		
    	}
       
    }
}
$(".result").html(html);
});

