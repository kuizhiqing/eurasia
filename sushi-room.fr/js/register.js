////////////////////////////////////////////////////////////////////////////////////////////////
var register = {};
//属性,对应控件ID
register.property = {};
//register.property.civilite = "Please type civilite ";
register.property.email = "S'il vous plaît e-mail de type ";
register.property.email1 = "S'il vous plaît e-mail de type ";
register.property.pass = "mot de passe de type S'il vous plaît ";
register.property.pass1 = "mot de passe de type S'il vous plaît ";
register.property.prenom = "prenom type S'il vous plaît ";
register.property.telephone = "S'il vous plaît téléphone de type ";
register.property.nom = "S'il vous plaît nom de type ";
register.property.address = "S'il vous plaît l'adresse de type";

//提示信息
register.message={};
register.message.a1 = "Nom d'utilisateur ou mot de passe est incorrect "; //用户名或密码不正确
register.message.a2 = "Mot de passe incompatibles "; //密码不一致
//方法, 验证控件值
register.save = function () {
	if (common.checkNull(register.property)) {
		return;
	}
	if (common.checkEmail("email")) {
		return;
	}

	if (common.checkSame("email", "email1", register.message.a1)) {
		return;
	}
	if (common.checkSame("pass", "pass1", register.message.a2)) {
		return;
	}
	register.checkSameEmail();
};
//方法,验证数据库是否有重复e-mail,调用dwr框架
register.checkSameEmail = function () {
	ClientBso.hasSameEmail(document.getElementById("email").value, function (hasSameEmail) {
		if (hasSameEmail) {
			document.getElementById("hasSameEmail").style.display = "block";
		} else {
			//document.getElementById("form1").action = "LoginRegisterServlet";
			document.getElementById("form1").submit();
		}
	});
};