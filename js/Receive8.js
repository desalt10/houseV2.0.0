/**
 * 功能: 处理接收函数Receive8() 门禁@0008
 * @param state 状态
 * 对象.state 状态
 * "password is correct" 密码正确
 * "wrong password" 密码错误
 * "password successfully changed" 密码更改成功
 * "password recovery successful" 密码已恢复默认
 */
function Receive(s,a){
	if(a=="0007"){
		Receive8(s)
	}else{
		return;
	}
}
function Receive8(obj8){
	switch(obj8.state){
		case "Password Is Correct":{
			$("#dr-text").val("密码正确")
			$("#dr-text").css("font-size","0.5rem");
			// $("#dr-text").css("font-weight","bold");
			$(".door-img2").animate({right:'20%'},2000);
			dr_bug="";
			break;
		}
		case "Wrong Password":{
			$("#dr-text").val("密码错误,请重新输入")
			$("#dr-text").css("font-size","0.5rem");
			// $("#dr-text").css("font-weight","bold");
			$(".door-img2").animate({right:'0%'},2000);
			dr_bug="";
			break;
		}
		case "Password Successfully Changed":{
			$("#dr-text").val("密码更改成功")
			$("#dr-text").css("font-size","0.5rem");
			// $("#dr-text").css("font-weight","bold");
			$(".door-img2").animate({right:'0%'},2000);
			dr_bug="";
			break;
		}
		case "Password Recovery Successful":{
			$("#dr-text").val("密码已恢复默认")
			$("#dr-text").css("font-size","0.5rem");
			// $("#dr-text").css("font-weight","bold");
			$(".door-img2").animate({right:'0%'},2000);
			dr_bug="";
			break;
		}
	}
	
}