/**
 * 功能: 处理接收函数Receive7() 窗户控制@0007
 * @param pos_buf 窗户实际位置
 * @param pos_buf1 窗户计算后的位置(需要在界面上显示的位置)
 * 不做开关窗 窗户暂停指令.
 * 窗户效果全由底部上传的位置数据控制
<<<<<<< HEAD
 * 对象.actuatorposition 窗户位置
 * 对象.actuatoroperationmode 窗户控制(0-开窗 1-关窗 2-暂停)
 * 对象.clampwindow 窗户防夹力(1-6)
 * 对象.speedwindow 窗户速度(1-4)
 */
var pos_buf,pos_buf1,pin_buf,speed_buf;
function Receive7(obj7){
	// 窗户位置 || 窗户速度(速度1:运动时间2000;2:1600;3:1300;4:1000)
	pos_buf = (obj7.actuatorposition)*1;
	
	$("#slider_pos").text(pos_buf);
	pos_buf1 = pos_buf/2.5;
	$("#wind-2").animate({left:'-'+pos_buf1+'%'},speed_buf);
	
	// 所有按键恢复初始样式
	for( var i=1;i<10;i++){
		$("#get"+i).css("background","");
	}
	
	//窗户控制
=======
 */
var pos_buf,pos_buf1;
function Receive7(obj7){
	// pos_buf = (obj7.actuatorposition)*1;
	// pos_buf1 = pos_buf/2.5;
	// $("#wind-2").animate({left:'-'+pos_buf1+'%'},6000);
	
	// 初始样式
	for( var i=1;i<10;i++){
		$("#get"+i).css("background","");
	}
>>>>>>> 8d2940bd5134fdc847077e0359e212c275c05f89
	switch(obj7.actuatoroperationmode){
		case "0":{
			$("#get1").css("background","yellow");
			console.log(1)
			break;
		}
		case "1":{
			$("#get2").css("background","yellow");
			console.log(2)
			break;
		}
		case "2":{
			$("#get3").css("background","yellow");
			console.log(3)
			break;
		}
	}
<<<<<<< HEAD
	//窗户防夹力度
	pin_buf = (obj7.clampwindow)*1;
	$("#slider_pin").text(pin_buf)
	//窗户速度
	switch(obj7.speedwindow){
		case "1":{
			$("#get4").css("background","yellow");
			speed_buf = 2000;
			break;
		}
		case "2":{
			$("#get5").css("background","yellow");
			speed_buf = 1600;
			break;
		}
		case "3":{
			$("#get6").css("background","yellow");
			speed_buf = 1300;
			break;
		}
		case "4":{
			$("#get7").css("background","yellow");
			speed_buf = 1000;
			break;
		}
	}
=======
	
	// switch(obj7.speedwindow){
	// 	case "1":{
	// 		$("#get4").css("background","yellow");
	// 		break;
	// 	}
	// 	case "2":{
	// 		$("#get5").css("background","yellow");
	// 		break;
	// 	}
	// 	case "3":{
	// 		$("#get6").css("background","yellow");
	// 		break;
	// 	}
	// 	case "4":{
	// 		$("#get7").css("background","yellow");
	// 		break;
	// 	}
	// }
>>>>>>> 8d2940bd5134fdc847077e0359e212c275c05f89
}
