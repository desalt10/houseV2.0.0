/**
 * 功能: 处理接收函数Receive10() 电表@0010
 * @param str10  接收需要处理数据的对象
 * @param vol 电压
 * @param ele 电流
 * @param pow  功率值
 * @param fre 频率
 * @param con 总功率值
 * obj10.params  需要处理数据的对象
 * 对象.voltage  电压值
 * 对象.electricity  电流值
 * 对象.power  功率值
 * 对象.frequency  电压频率
 * 对象.PowerConsumption 总功率
 */

var str10,vol,ele,pow,fre,con;
function Receive(s,a){
	if(a=="0001"){
		Receive10(s)
	}else{
		return;
	}
}
function Receive10(obj10){
	// str10 = obj10.params;
	Get10(obj10);
}
function Get10(s){
	vol = s.voltage;
	ele = s.electricity;
	pow = s.power;
	fre = s.frequency;
	con = s.powerconsumption;
	$("#text1").text(vol+"(V)");
	$("#text2").text(ele+"(A)");
	$("#text3").text(pow+"(W)");
	$("#text4").text(fre+"(Hz)");
	$("#text5").text(con+"(KWH)");
}