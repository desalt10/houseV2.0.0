/**
 * 功能: 处理接收函数Receive9() 水表@0009
 * @param Water 用水量
 * @param Sta 阀门状态
 * 对象.WaterConsumption  用水量
 * 对象.Status  阀门控制  0:开 1:关 2:读阀门状态
 */
var Water,Sta,Water_buf,Sta_buf;
function Receive(s,a){
	if(a=="0008"){
		Receive9(s)
	}else{
		return;
	}
}
function Receive9(obj9){
	Get_water(obj9)
	Get_status(obj9)
}
/**
 * 功能: 获取用水量
 * @param Water 用水量
 * 对象.WaterConsumption  用水量
 */
function Get_water(obj9){
	if(obj9.hasOwnProperty("WaterConsumption")){
		Water = obj9.WaterConsumption;
		if(Water<10000){
			$("#text1").text(Water+'(m³)');
		}else{
			$("#text1").text("数据异常");
		}
	}
}
/**
 * 功能: 获取阀门状态
 * @param Sta 阀门状态
 * 对象.Status  阀门控制  0:开 1:关 2:读阀门状态
 */
function Get_status(obj9){
	if(obj9.hasOwnProperty("valvecontrol")){
		Sta = obj9.valvecontrol;
		if(Sta==1){
			$("#text2").text("关");
			
		}else{
			$("#text2").text("开");
		}
	}
}