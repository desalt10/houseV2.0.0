/**
 * 功能: 处理接收函数Receive12()-Receive19 智能插座 @0012-0019
 * 
 */
function Receive12(obj12){
	ChangeImg(obj12)
}
function Receive13(obj13){
	ChangeImg(obj13)
}
function Receive14(obj14){
	ChangeImg(obj13)
}
function ChangeImg(s){
	for(var i=1;i<9;i++){
		if(s["PowerSwitch_"+i]=="1"){
			$("#img"+i).attr("src", "../../img/page12-on.png");
		}
		if(s["PowerSwitch_"+i]=="0"){
			$("#img"+i).attr("src", "../../img/page12-off.png");
		}
	}
}