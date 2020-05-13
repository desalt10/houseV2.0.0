/** Page1 两路灯控制
*  功能说明: btnOpen_1() 灯1 开
*  功能说明: btnClose_1() 灯1 关
*  功能说明: btnOpen_2() 灯2 开
*  功能说明: btnClose_2() 灯2 关
*/
function btnOpen_1(){
	SendData('@0001:{"PowerSwitch_1":1}\r\n');
}
function btnClose_1(){
	SendData('@0001:{"PowerSwitch_1":0}\r\n');
}
function btnOpen_2(){
	SendData('@0001:{"PowerSwitch_2":1}\r\n');
}
function btnClose_2(){
	SendData('@0001:{"PowerSwitch_2":0}\r\n');
}


/** Page4 空调遥控控制  设备编号@0004
*  功能说明: Reset() 电源开关 （0-关。1-开）    
*  功能说明: airSpeed() 风速功能 (0-自动。1-3风速越来越快)
*  功能说明: airMode() 空调模式 （0 - 自动。1 - 制冷。2 - 制热。3 - 通风。4 - 除湿）
*  功能说明: airWind() 扫风 （0-关闭。1-开启）
*  功能说明: airTem( )  显示温度
*  功能说明: showLevel1() 品牌选择
*  功能说明: airTry() 尝试匹配按键
*  功能说明: airCon()  匹配成功按键
*/
var air_power_mask = false;
function airPower(){
	if(air_power_mask){
		Reset()
		SendData('@0004: {"PowerSwitch":0}\r\n');
	}else{
		Open()
		SendData('@0004: {"PowerSwitch":1}\r\n');
	}
	air_power_mask =!air_power_mask;
	
}
// 电源开关关闭时
function Reset(){
	$(".text-show p").css("opacity","0");
	$("#air-speed,#air-wind,#air-mode,#air-down,#air-up,#showUserPicker1,.text-1,.text-2").attr("disabled",true);
}
// 电源开关开启时
function Open(){
	$(".text-show p").css("opacity","1");
	$("#air-speed,#air-wind,#air-mode,#air-down,#air-up,#showUserPicker1").attr("disabled",false);
}

//风速功能
var speed_buf=0;
function airSpeed(){
	switch(speed_buf){
		case 0:{
			$("#text-speed").text("自动");
			SendData('@0004: {"WindSpeed":0}\r\n');
			speed_buf = 1;
			break;
		}
		case 1:{
			$("#text-speed").text("风速1");
			SendData('@0004: {"WindSpeed":1}\r\n');
			speed_buf = 2;
			break;
		}
		case 2:{
			$("#text-speed").text("风速2");
			SendData('@0004: {"WindSpeed":2}\r\n');
			speed_buf = 3;
			break;
		}
		case 3:{
			$("#text-speed").text("风速3");
			SendData('@0004: {"WindSpeed":3}\r\n');
			speed_buf = 0;
			break;
		}
	}
}
// 空调模式
var mode_buf=0;
function airMode(){
	switch(mode_buf){
		case 0:{
			$("#text-mode").text("自动");
			SendData('@0004: {"WindSpeed":0}\r\n');
			mode_buf = 1;
			break;
		}
		case 1:{
			$("#text-mode").text("制冷");
			SendData('@0004: {"WindSpeed":1}\r\n');
			mode_buf = 2;
			break;
		}
		case 2:{
			$("#text-mode").text("制热");
			SendData('@0004: {"WindSpeed":2}\r\n');
			mode_buf = 3;
			break;
		}
		case 3:{
			$("#text-mode").text("通风");
			SendData('@0004: {"WindSpeed":3}\r\n');
			mode_buf = 4;
			break;
		}
		case 4:{
			$("#text-mode").text("除湿");
			SendData('@0004: {"WindSpeed":3}\r\n');
			mode_buf = 0;
			break;
		}
	}
}
// 空调扫风
var wind_mask= true;
function airWind(){
	if(wind_mask){
		$("#text-wind").text("上下摆风");
		SendData('@0004: {"VerticalSwitch":1}\r\n');
	}else{
		$("#text-wind").text("");
		SendData('@0004: {"VerticalSwitch":0}\r\n');
	}
	wind_mask =!wind_mask;
}
// 空调温度
var tem_bug =26;
function airTem(i){
	if(i){
		if(tem_bug>=30){
			tem_bug = 30;
		}else{
			tem_bug ++;
		}
	}
	else{
		if(tem_bug <=16){
			tem_bug = 16;
		}else{
			tem_bug --;
		}
	}
	$("#text-tem").text(tem_bug+"℃");
	SendData('@0004: {"TargetTemperature":'+tem_bug+'}\r\n');
}
// 品牌选择
function showLevel1() {
					var picker = new mui.PopPicker({
						layer: 1,
						buttons: ['取消', '确定']
					});
					picker.setData([{
						value: "1",
						text: "海尔"
					}, {
						value: "2",
						text: "格力"
					}, {
						value: "3",
						text: "美的"
					}, {
						value: "4",
						text: "长虹"
					}, {
						value: "5",
						text: "志高"
					},{
						value: "6",
						text: "华宝"
					},
					{
						value: "7",
						text: "科龙"
					},
					{
						value: "8",
						text: "TCL"
					},
					{
						value: "9",
						text: "格兰仕"
					},
					{
						value: "10",
						text: "华凌"
					},
					{
						value: "11",
						text: "春兰"
					},
					
					{
						value: "12",
						text: "奥克斯"
					},
					{
						value: "13",
						text: "新科"
					},
					{
						value: "14",
						text: "澳柯玛"
					},
					{
						value: "15",
						text: "海信"
					},
					{
						value: "16",
						text: "飞鹿"
					},
					{
						value: "17",
						text: "东宝（东新宝）"
					},
					{
						value: "18",
						text: "新飞"
					},
					{
						value: "19",
						text: "三洋"
					},
					{
						value: "20",
						text: "三菱"
					},
					{
						value: "21",
						text: "LG"
					},
					{
						value: "22",
						text: "东芝"
					},
					{
						value: "23",
						text: "日立"
					},
					{
						value: "24",
						text: "乐声"
					},
					{
						value: "25",
						text: "开利"
					},
					{
						value: "26",
						text: "富士通(珍宝)"
					},
					{
						value: "27",
						text: "声宝"
					},
					{
						value: "28",
						text: "大金"
					},
					{
						value: "29",
						text: "惠而浦"
					},
					{
						value: "30",
						text: "YORK"
					},
					{
						value: "31",
						text: "现代（大宇）"
					},
					{
						value: "32",
						text: "伊莱克斯"
					},
					{
						value: "33",
						text: "迎燕"
					},
					{
						value: "34",
						text: "玉兔"
					},
					{
						value: "35",
						text: "中意"
					}
					
					
					]);
					document.getElementById("showUserPicker1").addEventListener('tap', function(event) {
						$(".text-1,.text-2").attr("disabled",false);
						// 默认显示第4项
						// picker.pickers[0].setSelectedIndex(3, 2000);
						picker.show(function(selectItems) {
							var text = selectItems[0].text;
							var value = selectItems[0].value;
							$("#showUserPicker1").text(text);
							SendData('@0004: {"SelectModel":'+value+'}\r\n');
						});
					});
				}
		
// 尝试匹配
function airTry(){
	SendData('@0004:  {"OK":2}\r\n');
}
//匹配成功
var aircon_mask = true;
function airCon(){
	if(aircon_mask){
		$("#showUserPicker1,.text-1").attr("disabled",true);
		$(".text-2").text("取消匹配");
	}else{
		$("#showUserPicker1,.text-1").attr("disabled",false);
		$(".text-2").text("匹配成功");
	}
	aircon_mask = !aircon_mask;
}


/** Page6 窗帘控制
*  功能说明: btnOpen_6() 窗帘开
*  功能说明: btnClose_6() 窗帘关
*  功能说明: btnPause_6() 窗帘暂停
*  状态值: 0:打开   1:关闭  2:暂停
*/
function btnOpen_6(){
	SendData('@0006:{"CurtainOperation":0}\r\n');
};
function btnClose_6(){
	SendData('@0006:{"CurtainOperation":1}\r\n');
}
function btnPause_6(){
	SendData('@0006:{"CurtainOperation":2}\r\n');
}
/** Page9 水表控制
*  功能说明: Status_on()控制阀门开
*  功能说明: Status_off()控制阀门关
*  功能说明: Status_read()读阀门状态
*  状态值: 0:打开  1:关闭  2:读阀门状态
*  功能说明: Water_read() 读用水量
*/
function Status_on(){
	SendData('@0009:{"Status":0}\r\n');
}
function Status_off(){
	SendData('@0009:{"Status":1}\r\n');
}
function Status_read(){
	SendData('@0009:{"Status":2}\r\n');
}
function Water_read(){
	SendData('@0009:{"tunnage":0}\r\n');
}

/** Page10 电表控制
*  功能说明: Ele_read() 读电表
*/
function Ele_read(){
	SendData('@0010:{"automanual":1}\r\n');
}

/** Page11 温湿度控制
*  功能说明: Th_read() 读温湿度
*/
function Th_read(){
	SendData('@0011:{"Read":0}\r\n');
}
