/**
 * 功能: 处理接收函数Receive11() 温湿度 @0011
 * @param str10  接收需要处理数据的对象
 * @param tem 温度
 * @param hum 湿度
 * 对象.CurrentTemperature  温度
 * 对象.CurrentHumidity  湿度
 */
var tem,hum
function Receive(s,a){
	if(a=="0009"){
		Receive11(s)
	}else{
		return;
	}
}
function Receive11(obj11){
	Get11(obj11)
}
function Get11(s){
	tem = s.CurrentTemperature;
	hum = s.CurrentHumidity;
	if(tem<80){
		$("#tem").text(tem+"(℃)");
	}else{
		$("#tem").text("数据异常");
	}
	if(hum<100){
		$("#hum").text(hum+"(%)");
	}else{
		$("#hum").text("数据异常");
	}
}