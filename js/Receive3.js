/**
 * 功能: 处理接收函数Receive3() PLC控制@0003
 * 对象.
 * @param control01~control10：PLC十路开关。（X：0关。1开） 
 * @param VWO：全开全关（X：0全关。1全开）
 * @param led2_buf 灯2状态的暂存
 * 对象.CurtainPosition  窗帘位置 0:全开 100:全关
 * 对象.CurtainOperation 窗帘操作模式 0:开 1:关 2:暂停
 */
function Receive3(obj3){
	for(var i=1; i<6;i++){
		if(obj3["control0"+i]=="1"){
			$("#btn"+i).css("background","red");
		}else{
			$("#btn"+i).css("background","brown");
		}
	}
	if(obj3.VWO){
		$("#btn-power").css("background","#2FB472");
	}else{
		$("#btn-power").css("background","#006926");
	}
}