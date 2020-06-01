/**
 * 功能: 处理接收函数Receive12()-Receive19() 智能插座 @0012-0019
 * 
 */
function Receive(s,a){
	if(a=="0014"){
		Receive12(s)
	}
	if(a=="0015"){
		Receive13(s)
	}
	if(a=="0016"){
		Receive14(s)
	}
	if(a=="0017"){
		Receive15(s)
	}
	if(a=="0018"){
		Receive16(s)
	}
	if(a=="0019"){
		Receive17(s)
	}
	if(a=="0020"){
		Receive18(s)
	}
	if(a=="0021"){
		Receive19(s)
	}
}

function Receive12(obj12){
	ChangeImg(obj12,1)
}
function Receive13(obj13){
	ChangeImg(obj13,2)
}
function Receive14(obj14){
	ChangeImg(obj14,3)
}
function Receive15(obj15){
	ChangeImg(obj15,4)
}
function Receive16(obj16){
	ChangeImg(obj16,5)
}
function Receive17(obj17){
	ChangeImg(obj17,6)
}
function Receive18(obj18){
	ChangeImg(obj18,7)
}
function Receive19(obj19){
	ChangeImg(obj19,8)
}
function ChangeImg(s,i){
	if(s.powerswitch_1=="1"){
		$("#img"+i).attr("src", "../../img/page12-on.png");
		socket_mask = true;
	}else{
		$("#img"+i).attr("src", "../../img/page12-off.png");
		socket_mask = false;
	}
}