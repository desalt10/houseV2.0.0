/**
 * 功能: 处理接收函数Receive20() 安防控制@0020
 * 对象.da1-8 防区报警
 * 对象.da9 紧急报警
 * 对象.da10 火警报警
 * 对象.da11 盗警报警
 * 对象.da12 报警状态
 * 对象.da13 撤布防状态
 * 对象.da14 服务灯状态
 * 对象.da15 模块通讯故障
 */
function Receive(s,a){
	if(a =="0012"){
		Receive20(s)
	}else{
		return;
	}
}
function Receive20(obj20){
	for(var i = 1;i< 9;i++){
		if(obj20["da"+i] =="1"){
			$("#smimg"+i).attr("src","./img/smart-8.png");
		}else{
			$("#smimg"+i).attr("src","./img/smart-1.png");
		}
	}
	if(obj20.da9=="1"){
		$("#smimg9").attr("src","./img/smart-3.png");
	}else{
		$("#smimg9").attr("src","./img/smart-2.png");
	}
	if(obj20.da10=="1"){
		$("#smimg10").attr("src","./img/smart-5.png");
	}else{
		$("#smimg10").attr("src","./img/smart-4.png");
	}
	if(obj20.da11=="1"){
		$("#smimg11").attr("src","./img/smart-7.png");
	}else{
		$("#smimg11").attr("src","./img/smart-6.png");
	}
	if(obj20.da12=="1"){
		$("#sm-pol").val("报警")
	}else{
		$("#sm-pol").val("无")
	}
	if(obj20.da13=="1"){
		mui.toast("布防成功");
		$("#sm-detest").text("撤防");
		$(".sa-ul").css("border-color","red");
		sm_bug = "";
		$("#smtext").val(sm_bug);
		// $("#smtext").val("布防成功")
		sm_mask = false;
	}else{
		mui.toast("撤防成功");
		$("#sm-detest").text("布防");
		$(".sa-ul").css("border-color","#FFF4D3");
		sm_bug = "";
		$("#smtext").val(sm_bug);
		// $("#smtext").val("撤防成功")
		sm_mask = true;
	}
	if(obj20.da14=="1"){
		$(".serve-power").css("background","red")
	}else{
		$(".serve-power").css("background","#0000FF")
	}
	if(obj20.da15=="1"){
		$("#sm-fault").val("异常")
	}else{
		$("#sm-fault").val("无")
	}
}