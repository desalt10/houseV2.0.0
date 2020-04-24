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