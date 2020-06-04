/**
 * 功能: 处理接收函数Receive3() PLC控制@0003
 * 对象.
 * @param control01~control10：PLC十路开关。（X：0关。1开） 
 * @param vwo：全开全关（X：0全关。1全开）
 * @param led2_buf 灯2状态的暂存
 * 对象.CurtainPosition  窗帘位置 0:全开 100:全关
 * 对象.CurtainOperation 窗帘操作模式 0:开 1:关 2:暂停
 */
function Receive(s,a){
	if(a=="0002"){
		Receive3(s)
	}else{
		return;
	}
}
function Receive3(obj3){
	if(obj3.control01==1){
		$("#btn1").css("background","red");
		btn_mask[0] = 1;
		
	}else{
		$("#btn1").css("background","brown");
		btn_mask[0] = 0;
	}
	if(obj3.control02==1){
		$("#btn2").css("background","red");
		btn_mask[1] = 1;
	}else{
		$("#btn2").css("background","brown");
		btn_mask[1] = 0;
	}
	if(obj3.control03==1){
		$("#btn3").css("background","red");
		btn_mask[2] = 1;
	}else{
		$("#btn3").css("background","brown");
		btn_mask[2] = 0;
	}
	if(obj3.control04==1){
		$("#btn4").css("background","red");
		btn_mask[3] = 1;
	}else{
		$("#btn4").css("background","brown");
		btn_mask[3] = 0;
	}
	if(obj3.control05==1){
		$("#btn5").css("background","red");
		btn_mask[4] = 1;
	}else{
		$("#btn5").css("background","brown");
		btn_mask[4] = 0;
	}
	if(obj3.vwo ==1){
		$("#btn-power").css("background","#2FB472");
		btn_power_mask = true;
	}else{
		$("#btn-power").css("background","#006926");
		btn_power_mask = false;
	}
}