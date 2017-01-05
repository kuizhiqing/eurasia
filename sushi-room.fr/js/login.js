////////////////////////////////////////////////////////////////////////////////////////////////
var r_login_register = {};
//属性,对应控件ID
r_login_register.property = {};
r_login_register.property.registeremail = "S'il vous plaît e-mail de type ";
r_login_register.property.registerpassword = "mot de passe de type S'il vous plaît ";
r_login_register.property.registerpassword1 = "mot de passe de type S'il vous plaît ";
//提示信息
r_login_register.message = {};
r_login_register.message.a1 = "Nom d'utilisateur ou mot de passe est incorrect"; //用户名或密码不正确
r_login_register.message.a2 = "Mot de passe incompatibles"; //密码不一致
//方法, 验证控件值
r_login_register.register = function () {
	if (common.checkNull(r_login_register.property)) {
		return;
	}
	if (common.checkEmail("registeremail")) {
		return;
	}
	if (common.checkSame("registerpassword", "registerpassword1", r_login_register.message.a2)) {
		return;
	}
	r_login_register.checkSameEmail();
};
//方法,验证数据库是否有重复e-mail,调用dwr框架
r_login_register.checkSameEmail = function () {
	ClientBso.hasSameEmail(document.getElementById("registeremail").value, function (hasSameEmail) {
		if (hasSameEmail) {
			document.getElementById("hasSameEmail").style.display = "block";
		} else {
			document.getElementById("form1").action = "LoginRegisterServlet";
			document.getElementById("form1").submit();
		}
	});
};
//////////////////////////////////////////////////////////////////////////////////////////////
var r_login_login = {};
//属性,对应控件ID
r_login_login.property = {};
//r_login_login.property.email = "Please type email ";
r_login_login.property.code = "mot de passe de type S'il vous plaît ";
//方法, 验证控件值
r_login_login.login = function () {
	if (common.checkEmail("email")) {
		return;
	}
	if (common.checkNull(r_login_login.property)) {
		return;
	}
	document.getElementById("form1").action = "LoginServlet";
	document.getElementById("form1").submit();
};
//忘记密码
function forget() {
	var value = document.getElementById("forgetpassword-email-source").value;
	if (common.checkEmail("forgetpassword-email-source")) {
		return;
	}
	if (value == "") {
		alert("S'il vous plaît e-mail de type");
		return;
	}
	document.getElementById("forgetpassword-email").value = value;
	document.getElementById("forgetpassword").action = "ForgetPasswordServlet";
	document.getElementById("forgetpassword").submit();
}
