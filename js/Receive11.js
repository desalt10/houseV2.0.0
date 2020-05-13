/**
 * 功能: 处理接收函数Receive11() 温湿度 @00011
 * @param str10  接收需要处理数据的对象
 * @param tem 温度
 * @param hum 湿度
 * 对象.CurrentTemperature  温度
 * 对象.CurrentHumidity  湿度
 */
var tem,hum
function Receive11(obj11){
	Get11(obj11)
}
function Get11(s){
	tem = s.CurrentTemperature;
	hum = s.CurrentHumidity;
	$("#tem").text(tem+"(℃)");
	$("#hum").text(hum+"(%)");
}