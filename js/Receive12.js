/**
 * 功能: 处理接收函数Receive12()-Receive19 智能插座 @0012-0019
 * @param str10  接收需要处理数据的对象
 * @param tem 温度
 * @param hum 湿度
 * 对象.CurrentTemperature  温度
 * 对象.CurrentHumidity  湿度
 */
var tem,hum
function Receive12(obj12){
	if(obj12=="1"){
		$("#img1").attr("src","02.png");
	}
}
function Get11(s){
	tem = s.CurrentTemperature;
	hum = s.CurrentHumidity;
	$("#tem").text(tem+"(℃)");
	$("#hum").text(hum+"(%)");
}