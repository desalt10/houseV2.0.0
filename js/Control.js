//---------------------------------------------------------------
function onConnect(){//网络连接成功将自动调用该函数，用户只需编写执行代码即可;该函数用来表现网络连接成功的状态
	/***************	****************/
	console.log("网络连接成功！");
	/*******************************/
}
//---------------------------------------------------------------
function Disconnect(num){//网络连接断开将自动调用该函数，用户只需编写执行代码即可；该函数用来表现网络连接断开的状态
	if(num==1){//网络连接断开
		SocketConnect(2,"hex");//从新连接网络
	}
	else if(num==2){//网络连接异常
		alert("网络连接异常！");//网页弹出对话框显示文本"网络连接异常！"
	}
}
//---------------------------------------------------------------
function Data_Dispose(str,hex){//数据处理函数
	console.log(str);//控制台输出数据；控制台打开放式：用浏览器打开网页（.html文件），按键盘按键F12即可进入浏览器的调试台，选择“控制台”或“Console”选项；
	// type判断数据来源哪个设备 str1取设备号后的字符串 str2 isJsonString()字符串转JSON对象函数
/**
 * 功能: isJsonString()字符串转JSON对象
 * @param type 判断来自哪个设备
 * @param str1 除去设备号的数据
 * @param str2 如果有/r/n ,先除去后的数据
 */
	var type = str.substr(0,6);
	var str1 = str.substr(6);
	var str2;
	var obj;
	if(str1.indexOf("\r\n")){
		str2 = str1.replace(/\\r\\n/g,"");
		isJsonString(str2);
	}else{
		isJsonString(str1);
	}
	// 字符串转对象,先判断是否是完整的对象
	function isJsonString(str1){
		if(typeof JSON.parse(str1)=="object"){
			obj = JSON.parse(str1);
			console.log(obj)
		}else{
			console.log("数据错误");
		}
	}
	switch(type){
	   case "@0001:":{//灯1
		   Receive1(obj);
		   break;
	   }
	   case "@0002:":{//RGB
			// Receive2(obj);
			break;
	   }
	   case "@0003:":{//PLC
			Receive3(obj);
			break;
	   }
	   case "@0004:":{//空调
			Receive4(obj);
			break;
	   }
	   case "@0005:":{//电视
		   Receive5(obj);
		   break;
	   }
	   case "@0006:":{//窗帘
		   Receive6(obj);
		   break;
	   }
	   case "@0007:":{//窗户
		   Receive7(obj);
		   break;
	   }
	   case "@0008:":{//门禁
		   Receive8(obj);
		   break;
	   }
	   case "@0009:":{//水表
		   Receive9(obj);
		   break;
	   }
	   case "@0010:":{//电表
		   Receive10(obj);
		   break;
	   }
	   case "@0011:":{//温/湿度
		   Receive11(obj);
		   break;
	   }
	   case "@0012:":{//智能插座1
		   Receive12(obj);
		   break;
	   }
	   case "@0013:":{//智能插座2
	   		Receive13(obj);
	   		break;
	   }
	   case "@0014:":{//智能插座3
	   		Receive14(obj);
	   		break;
	   }
	   case "@0015:":{//智能插座4
	   		Receive15(obj);
	   		break;
	   }
	   case "@0016:":{//智能插座5
	   		Receive16(obj);
	   		break;
	   }
	   case "@0017:":{//智能插座6
	   		Receive17(obj);
	   		break;
	   }
	   case "@0018:":{//智能插座7
	   		Receive18(obj);
	   		break;
	   }
	   case "@0019:":{//智能插座8
	   		Receive19(obj);
	   		break;
	   }
	   case "@00020:":{//安防
	   		   Receive9(obj);
	   		   break;
	   }
	}
	
}
//---------------------------------------------------------------
function SendData(Data){
	if(DataType=="hex")Send_Data_Hex(Data);//发送十六进制数数据
	else if(DataType=="str") Send_Data_Str(Data);//发送字符串数据
}