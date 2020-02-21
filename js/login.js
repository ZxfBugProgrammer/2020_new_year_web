$(document).ready(function(){
	$("#login").click(function(event) {
		var name = $("#username").val();
		var pwd = $("#password").val();
		if(name=="")
		{
		   alert("用户名不能为空！");
		}
		else if(pwd=="")
		{
		   alert("密码不能为空！");
		}
		else if(pwd!="" && pwd.length < 6){
			alert("密码不能小于6位！");
		}
		else if(name!="" && pwd !="" && pwd.length >= 6)
		{
			if(name == "CGX" && pwd == "ffqq1314"){
				alert("登录成功！");
				window.location.href = "./ZXF.html";
			}
			else{
				alert("用户名或密码错误！");
				window.location.href = "./index.html";
			}

		}
	});
});