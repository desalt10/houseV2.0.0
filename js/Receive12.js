/**
 * 功能: 处理接收函数Receive12()-Receive19() 智能插座 @0012-0019
 * 
 */
function Receive(s,a){
	if(a=="0014"){
		if(s.PowerSwitch_1){
			$("#img1").attr("src", "../img/page12-on.png");
			socket_mask[0]=1;
		}else{
			$("#img1").attr("src", "../img/page12-off.png");
			socket_mask[0]=0;
		}
	}
	if(a=="0015"){
		if(s.PowerSwitch_1){
			$("#img2").attr("src", "../img/page12-on.png");
			socket_mask[1]=1;
		}else{
			$("#img2").attr("src", "../img/page12-off.png");
			socket_mask[1]=0;
		}
	}
	if(a=="0016"){
		if(s.PowerSwitch_1){
			$("#img3").attr("src", "../img/page12-on.png");
			socket_mask[2]=1;
		}else{
			$("#img3").attr("src", "../img/page12-off.png");
			socket_mask[2]=0;
		}
	}
	if(a=="0017"){
		if(s.PowerSwitch_1){
			$("#img4").attr("src", "../img/page12-on.png");
			socket_mask[3]=1;
		}else{
			$("#img4").attr("src", "../img/page12-off.png");
			socket_mask[3]=0;
		}
	}
	if(a=="0018"){
		if(s.PowerSwitch_1){
			$("#img5").attr("src", "../img/page12-on.png");
			socket_mask[4]=1;
		}else{
			$("#img5").attr("src", "../img/page12-off.png");
			socket_mask[4]=0;
		}
	}
	if(a=="0019"){
		if(s.PowerSwitch_1){
			$("#img6").attr("src", "../img/page12-on.png");
			socket_mask[5]=1;
		}else{
			$("#img6").attr("src", "../img/page12-off.png");
			socket_mask[5]=0;
		}
	}
	if(a=="0020"){
		if(s.PowerSwitch_1){
			$("#img7").attr("src", "../img/page12-on.png");
			socket_mask[6]=1;
		}else{
			$("#img7").attr("src", "../img/page12-off.png");
			socket_mask[6]=0;
		}
	}
	if(a=="0021"){
		if(s.PowerSwitch_1){
			$("#img8").attr("src", "../img/page12-on.png");
			socket_mask[7]=1;
		}else{
			$("#img8").attr("src", "../img/page12-off.png");
			socket_mask[7]=0;
		}
	}
}