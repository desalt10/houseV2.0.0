/**
 * 功能介绍:RGB电源总控制开关并发送指令
 * @param  Powermask 开关状态
 */
var Powermask=false;
function Power(){
	if(Powermask){
		console.log("关闭");
		$("#img").attr("src", "../../img/p2-off.png");
		$(".switch2").hide();
		switch2_off();
		SendData('@0002:{"LightSwitch":0}\r\n');
	}else{
		console.log("打开");
		$("#img").attr("src", "../../img/p2-on.png");
		$(".switch2").show();
		RGBmask = true;
		SendData('@0002:{"LightSwitch":1}\r\n');
	}
	Powermask = !Powermask;
}
/**
 * 功能介绍:RGB灯控制开关并发送指令
 * @param  Rgbmask 开关状态(初始状态关闭)
 */
// console.log(Powermask)
var RGBmask;
function RGBpower(){
	if(RGBmask){
		switch2_on();
	}
	else{
		switch2_off();
	}
	RGBmask=!RGBmask;
	SendData('@0002:{"RGBLight":0}\r\n');
}
/**
 * 功能介绍: RGB开关开的状态
 * @param  
 */
function switch2_on(){
	$(".switch3").show();
	$(".slider").css("opacity","1");
	$(".slider").css("pointer-events","auto");
	$(".switch2").css("background","#009F3C");
	$(".switch2").text("关闭");
	$('.lightbulb__bulb').css("background","#FCFCF7");
	$('.lightbulb__bulb_bottom').css("background","#FCFCF7");
}
/**
 * 功能介绍: RGB开关关的状态
 * @param  
 */
function switch2_off(){
	$(".switch3").hide();
	$(".slider").css("opacity","0.5");
	$(".slider").css("pointer-events","none");
	$(".switch2").css("background","#CDCDCD");
	$(".switch2").text("开启");
	$('.lightbulb__bulb').css("background","#000");
	$('.lightbulb__bulb_bottom').css("background","#000");
}

/**
 * 功能介绍:RGB灯颜色控制并发送指令
 * @param  Colormask 开关状态
 * @param Contol3 RGB颜色正白/黄白(初始状态正白)
 */
var Colormask =false;
var Contol3 ='@0002:{"CW_WW":0}\r\n';
function RGBColor(){
	if(Colormask){
		console.log("RGB正白色")
		$(".switch3").css("background","#FCFCF7");
		$('.lightbulb__bulb').css("background","#FCFCF7");
		$('.lightbulb__bulb_bottom').css("background","#FCFCF7");
		
	}else{
		$(".switch3").css("background","#FEFFBE");
		$('.lightbulb__bulb').css("background","#FEFFBE");
		$('.lightbulb__bulb_bottom').css("background","#FEFFBE");
		console.log("RGB正黄色")
	}
	Colormask=!Colormask;
	SendData(Contol3);
	console.log(Contol3);
}
/**
 * 功能介绍:获取闪烁模式滑块的值并发送指令
 * @param  rangeobj1 获取闪烁对象
 * @param a 拼接发送数据
 */
function getVal1(){
	console.log("闪烁")
	var rangeobj1 = mui('#rangel');
	var a;
	// mui.toast(rangeobj[0].value);
	console.log(rangeobj1[0].value)
	$(".text1").text('共有4种模式,当前为模式'+rangeobj1[0].value);
	a='@0002:{flicker:'+rangeobj1[0].value+'}\r\n';
	console.log(a);
	SendData(a);
}
/**
 * 功能介绍:获取音乐模式滑块的值并发送指令
 * @param  rangeobj2 获取音乐对象
 * @param b 拼接发送数据
 */
function getVal2(){
	console.log("音乐")
	var rangeobj2 = mui('#range2');
	var b;
	// mui.toast(rangeobj[0].value);
	console.log(rangeobj2[0].value)
	$(".text2").text('共有4种模式,当前为模式'+rangeobj2[0].value);
	b='@0002:{music:'+rangeobj2[0].value+'}\r\n';
	console.log(b);
	SendData(b);
}

/**
 * 功能介绍:获取亮度模式滑块的值并发送指令
 * @param  rangeobj3 获取亮度对象
 * @param c 拼接发送数据
 */
function getVal3(){
	console.log("亮度")
	var rangeobj3 = mui('#range3');
	var c;
	// mui.toast(rangeobj3[0].value);
	// console.log(rangeobj3[0].value)
	$(".text3").text('共有8种模式,当前为亮度'+rangeobj3[0].value);
	c='@0002:{luminance:'+rangeobj3[0].value+'}\r\n';
	console.log(c);
	SendData(c);
	switch(rangeobj3[0].value){
		case "1":{
			$(".lightbulb__bulb").css("filter","opacity(35%)");
			break;
		}
		case "2":{
			$(".lightbulb__bulb").css("filter","opacity(45%)");
			break;
		}
		case "3":{
			$(".lightbulb__bulb").css("filter","opacity(55%)");
			break;
		}
		case "4":{
			$(".lightbulb__bulb").css("filter","opacity(65%)");
			break;
		}
		case "5":{
			$(".lightbulb__bulb").css("filter","opacity(75%)");
			break;
		}
		case "6":{
			$(".lightbulb__bulb").css("filter","opacity(85%)");
			break;
		}
		case "7":{
			$(".lightbulb__bulb").css("filter","opacity(95%)");
			break;
		}
		case "8":{
			$(".lightbulb__bulb").css("filter","opacity(100%)");
			break;
		}
	}
}
/**
 * 功能介绍:获取颜色选择的值并发送指令
 * @param  d拼接发送数据
 * @param 
 */
function Color(s){
	var d;
	$(".color li").css("background","transparent");
	switch(s){
		case 1:{
			$("#Color1").css("background","#DF0023");
			$('.lightbulb__bulb').css("background","#DF0023");
			$('.lightbulb__bulb_bottom').css("background","#DF0023");
			break;
		}
		case 2:{
			$("#Color2").css("background","#EC6B9E");
			$('.lightbulb__bulb').css("background","#EC6B9E");
			$('.lightbulb__bulb_bottom').css("background","#EC6B9E");
			break;
		}
		case 3:{
			$("#Color3").css("background","#AAD46D");
			$('.lightbulb__bulb').css("background","#AAD46D");
			$('.lightbulb__bulb_bottom').css("background","#AAD46D");
			break;
		}
		case 4:{
			$("#Color4").css("background","#79C471");
			$('.lightbulb__bulb').css("background","#79C471");
			$('.lightbulb__bulb_bottom').css("background","#79C471");
			break;
		}
		case 5:{
			$("#Color5").css("background","#009F3C");
			$('.lightbulb__bulb').css("background","#009F3C");
			$('.lightbulb__bulb_bottom').css("background","#009F3C");
			break;
		}
		case 6:{
			$("#Color6").css("background","#3DB7B4");
			$('.lightbulb__bulb').css("background","#3DB7B4");
			$('.lightbulb__bulb_bottom').css("background","#3DB7B4");
			break;
		}
		case 7:{
			$("#Color7").css("background","#5D8AC6");
			$('.lightbulb__bulb').css("background","#5D8AC6");
			$('.lightbulb__bulb_bottom').css("background","#5D8AC6");
			break;
		}
		case 8:{
			$("#Color8").css("background","#3EBCDF");
			$('.lightbulb__bulb').css("background","#3EBCDF");
			$('.lightbulb__bulb_bottom').css("background","#3EBCDF");
			break;
		}
		case 9:{
			$("#Color9").css("background"," #6495ED");
			$('.lightbulb__bulb').css("background"," #6495ED");
			$('.lightbulb__bulb_bottom').css("background"," #6495ED");
			break;
		}
		case 10:{
			$("#Color10").css("background","#666EB0");
			$('.lightbulb__bulb').css("background","#666EB0");
			$('.lightbulb__bulb_bottom').css("background","#666EB0");
			break;
		}
		case 11:{
			$("#Color11").css("background","#6A509A");
			$('.lightbulb__bulb').css("background","#6A509A");
			$('.lightbulb__bulb_bottom').css("background","#6A509A");
			break;
		}
		case 12:{
			$("#Color12").css("background","#AE5D9C");
			$('.lightbulb__bulb').css("background","#AE5D9C");
			$('.lightbulb__bulb_bottom').css("background","#AE5D9C");
			break;
		}
	}
	d='@0002:{luminance:'+(s-1)+'}\r\n';
	console.log(d)
	SendData(d);
}