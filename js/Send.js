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
