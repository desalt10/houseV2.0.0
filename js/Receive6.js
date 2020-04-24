/**
 * 功能: 处理接收函数Receive6() 窗帘控制@0006
 * @param Position 窗帘当前位置
 * @param Position_buf 窗帘位置的暂存
 * @param led1_buf 灯1状态的暂存
 * @param led2_buf 灯2状态的暂存
 * 对象.CurtainPosition  窗帘位置 0:全开 100:全关
 * 对象.CurtainOperation 窗帘操作模式 0:开 1:关 2:暂停
 */
var Position_buf,Position
function Receive6(obj6){
	Position_buf = obj6.CurtainPosition;
	Position = Position_buf/2;
	console.log(Position)
	switch(obj6.CurtainOperation){
		case 0:{
			mui.toast('正在开启,请稍等');
			$(".Page6_1").css("width","0%");
			$(".Page6_2").css("width","0%");
			$(".btn1").css("background","#ffffff");
			$(".btn2").css("background","rgba(255, 255, 255, 0.5)");
			$(".btn3").css("background","rgba(255, 255, 255, 0.5)"); 
			break;
		}
		case 1:{
			mui.toast('正在关闭,请稍等');
			$(".Page6_1").css("width","50%");
			$(".Page6_2").css("width","50%");
			$(".btn2").css("background","#ffffff");
			$(".btn1").css("background","rgba(255, 255, 255, 0.5)");
			$(".btn3").css("background","rgba(255, 255, 255, 0.5)");
			break;
		}
		case 2:{
			mui.toast('正在暂停,请稍等');
			$(".Page6_1").css("width",Position+'%');
			$(".Page6_2").css("width",Position+'%');
			$(".btn3").css("background","#ffffff");
			$(".btn1").css("background","rgba(255, 255, 255, 0.5)");
			$(".btn2").css("background","rgba(255, 255, 255, 0.5)");
			break;
		}
	
		
	}
}