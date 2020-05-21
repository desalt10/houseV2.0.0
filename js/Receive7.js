/**
 * 功能: 处理接收函数Receive7() 窗户控制@0007
 * @param pos_buf 窗户实际位置
 * @param pos_buf1 窗户计算后的位置(需要在界面上显示的位置)
 * 不做开关窗 窗户暂停指令.
 * 窗户效果全由底部上传的位置数据控制
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
}
