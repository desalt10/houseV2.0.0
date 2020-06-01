/**
 * 功能: 处理接收函数Receive5() 电视学习电源
 */
function Receive(s,a){
	if(a=="0010"){
		Receive5(s)
	}else{
		return;
	}
}
function Receive5(obj5){
	if(obj5.study=="1"){
		$("#tv-study").css("background","#00FFFF");
		$("#tv-study").text("取消");
		$("#tv-study").css("color","#000");
		
	}else{
		$("#tv-study").css("background","brown");
		$("#tv-study").text("学习");
		$("#tv-study").css("color","#fff");
	}
}