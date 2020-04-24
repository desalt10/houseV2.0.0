
/**
 * 功能: 处理接收函数Receive1() 两路灯光控制@0001
 * @param led1 灯1状态
 * @param led2 灯2状态
 * @param led1_buf 灯1状态的暂存
 * @param led2_buf 灯2状态的暂存
 * 状态值 01 灯1开2闭 颜色值:#ebdbac
 * 状态值 10 灯1闭2开 颜色值:#ebdbac
 * 状态值 11 灯1开2开 颜色值:#f5efde
 * 状态值 01 灯1闭2闭 颜色值:#314173
 * 对象.PowerSwitch_1  灯光1  0:关 1:开
 * 对象.PowerSwitch_2  灯光2  0:关 1:开
 */
var led1,led2,led1_buf,led2_buf;
function Receive1(obj1){
	led1_buf = obj1.PowerSwitch_1;
	led2_buf = obj1.PowerSwitch_2;
	led1 = led1_buf.toString();
	led2 = led2_buf.toString();
	switch(led1+led2){
		case "10":{
			$(".switch-on").addClass("btn-on");
			$(".switch-off").addClass("btn-off");
			$(".light-switch-label").css("box-shadow","0 2px 2px #d0b57b;");
			$(".switch").css("box-shadow","0 10px 10px -5px #e9dbb0, 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 4px #fff4d3, 0 0 0 5px rgba(0, 0, 0, 0.1;");
			$(".switch-on1").removeClass("btn-on");
			$(".switch-off1").removeClass("btn-off");
			$(".light-switch-label").css("box-shadow","0");
			$(".switch1").css("box-shadow","0");
			$(".mui-content").css("background-color","#ebdbac");
			break;
		}
		case "01":{
			$(".switch-on").removeClass("btn-on");
			$(".switch-off").removeClass("btn-off");
			$(".light-switch-label").css("box-shadow","0");
			$(".switch").css("box-shadow","0");
			$(".switch-on1").addClass("btn-on");
			$(".switch-off1").addClass("btn-off");
			$(".light-switch-label").css("box-shadow","0 2px 2px #d0b57b;");
			$(".switch1").css("box-shadow","0 10px 10px -5px #e9dbb0, 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 4px #fff4d3, 0 0 0 5px rgba(0, 0, 0, 0.1;");
			$(".mui-content").css("background-color","#ebdbac");
			break;
		}
		case "11":{
			$(".switch-on").addClass("btn-on");
			$(".switch-off").addClass("btn-off");
			$(".light-switch-label").css("box-shadow","0 2px 2px #d0b57b;");
			$(".switch").css("box-shadow","0 10px 10px -5px #e9dbb0, 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 4px #fff4d3, 0 0 0 5px rgba(0, 0, 0, 0.1;");
			$(".switch-on1").addClass("btn-on");
			$(".switch-off1").addClass("btn-off");
			$(".light-switch-label").css("box-shadow","0 2px 2px #d0b57b;");
			$(".switch1").css("box-shadow","0 10px 10px -5px #e9dbb0, 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 4px #fff4d3, 0 0 0 5px rgba(0, 0, 0, 0.1;");
			$(".mui-content").css("background-color","#f5efde");
			break;
		}
		case "00":{
			$(".switch-on").removeClass("btn-on");
			$(".switch-off").removeClass("btn-off");
			$(".switch-on1").removeClass("btn-on");
			$(".switch-off1").removeClass("btn-off");
			$(".light-switch-label").css("box-shadow","0");
			$(".switch").css("box-shadow","0");
			$(".switch1").css("box-shadow","0");
			$(".mui-content").css("background-color","#314173");
			break;
		}
	}
}
