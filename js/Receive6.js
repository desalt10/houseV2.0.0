/**
 * 功能: 处理接收函数Receive6() 窗帘控制@0006
 * @param Position 窗帘当前位置
 * @param Position_buf 窗帘位置的暂存
 * @param led1_buf 灯1状态的暂存
 * @param led2_buf 灯2状态的暂存
 * 对象.CurtainPosition  窗帘位置 0:全开 100:全关
 * 对象.CurtainOperation 窗帘操作模式 0:开 1:关 2:暂停
 * 不对位置进行判断
 */
var Position_buf,Position
function Receive(s,a){
	if(a=="0005"){
		Receive6(s)
	}else{
		return;
	}
}
function Receive6(obj6){
	// Position_buf = obj6.curtainposition;
	// Position = Position_buf/2;
	$(".btn1,.btn2,.btn3").css("color","");
	$(".btn1,.btn2,.btn3").css("background","rgba(255, 255, 255, 0.5)"); 
	
	switch(obj6.CurtainOperation){
		case 0:{
			mui.toast('正在开启');
			$(".Page6_1,.Page6_2").removeClass("animate2");
			$(".Page6_1,.Page6_2").addClass("animate1");
			$(".Page6_1,.Page6_2").css("animation-play-state","running");
			$(".btn1").css({"background":"#ffffff","color":"red"});
			break;
		}
		case 1:{
			mui.toast('正在关闭');
			$(".Page6_1,.Page6_2").removeClass("animate1");
			$(".Page6_1,.Page6_2").addClass("animate2");
			$(".Page6_1,.Page6_2").css("animation-play-state","running");
			$(".btn2").css({"background":"#ffffff","color":"red"});
			break;
		}
		case 2:{
			mui.toast('正在暂停');
			$(".Page6_1").css("animation-play-state","paused");
			$(".Page6_2").css("animation-play-state","paused");
			$(".btn3").css({"background":"#ffffff","color":"red"});
			break;
		}
	}
}