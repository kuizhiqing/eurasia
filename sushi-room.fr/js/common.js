
hs.graphicsDir = "highslide/graphics/";
hs.wrapperClassName = "wide-border";
hs.showCredits = false;
$(document).ready(function () {
	$(".btn03").each(function (i) {
		this.onmouseout = function (event) {
			this.style.color = "#9e9d9d";
		};
		this.onmousemove = function (event) {
			this.style.color = "#9cc944";
		};
	});
});

/////////////////////////////////////////////////////////////////
var common = {};
//公共消息
common.message = {};
common.message._01 = "Mot de passe incompatibles"; //密码不一致
//去除两边空格
common.trim = function (str) {
	var reExtraSpace = /^\s*(.*?)\s+$/;
	return str.replace(reExtraSpace, "$1");
};
//查看是否为空
common.checkNull = function (objs) {
	for (objName in objs) {
		try {
			var obj = document.getElementById(objName);
			obj.value = common.trim(obj.value);
			if (obj.value == "") {
				alert(objs[objName]);
				obj.focus();
				return true;
			}
		}
		catch (e) {
			alert(e);
		}
	}
};
//查看两个控件的值是否相同
common.checkSame = function (name1, name2, message) {
	if (document.getElementById(name1).value != document.getElementById(name2).value) {
		alert(message);
		document.getElementById(name2).focus();
		return true;
	}
};
//验证e-mail
common.checkEmail = function (objName) {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-_])+\.)+([a-zA-Z0-9]+)+$/;
	var email = document.getElementById(objName);
	if (reg.test(email.value) == false) {
		email.focus();
		alert("Erreur de format e-mail");
		return true;
	}
};
/////////////////////////////////////////////////////////////////
//翻页
var page = {};
//翻页
page.change = function changePage(pageIndex, url, para) {
	var start = parseInt(document.getElementById("start").value);
	var pageSize = parseInt(document.getElementById("pageSize").value);
	var count = parseInt(document.getElementById("count").value);
	var columnName = document.getElementById("columnName").value;
	var columnValue = document.getElementById("columnValue").value;
	if (pageIndex == "pre") {
		if (start > 0) {
			start = start - pageSize;
			document.location = url + "?start=" + start + "&columnName=" + columnName + "&columnValue=" + columnValue + para;
		}
	} else {
		if (pageIndex == "next") {
			if (start + pageSize < count) {
				start = start + pageSize;
				document.location = url + "?start=" + start + "&columnName=" + columnName + "&columnValue=" + columnValue + para;
			}
		}
	}
};
//退出页面
page.loginout = function () {
	if (confirm("Que ce soit pour un cong\xe9")) {
		document.location = "LoginoutServlet";
	}
};
////////////////////////////////////////////////////
//购物车 保存REGION
function showUseCP() {
	$.prompt($("#divTC").html(), {buttons:[{title:"Enregistrer", value:true}], submit:function (v, m, f) {
		if (v) {
		//alert(f.regionid);
			if(f.regionid != undefined){
				$.post("action/useCP.jsp", {"useCP":f.regionid}, function (data) {
					document.location.reload();
				});					
			}else{
				$.prompt("Veuillez choisir une ville");
			}			
		}
	}});	
}
//提交购物车， 选择地区
function useCP(obj) {
	id = $(obj).parent().find("#regionid").val();	
	$.post("action/useCP.jsp", {"useCP":id}, function (data) {
		document.location.reload();
	});
}
//
function candeliver() {	
	$.ajax({type:"GET", url:"action/candeliver.jsp", data:{}, async:false, cache:false, success:function (msg) {
		msg = trim(msg);
		eval(msg);
	}, error:function (XMLHttpRequest, textStatus, errorThrown) {
		alert(XMLHttpRequest.responseText);
	}});	
}
//trim
function trim(msg){
	var reg = /[\r\n]/igm;
	msg = msg.replace(reg, '')
	msg = $.trim(msg);
	return msg;
}
//更改区域
function changeRegion(obj){	
	var region=$(obj).parent().find('#regionid');	 
	region.empty(); 
	region.append("<option value='0'>Choisissez...</option>");
	$('input[type=hidden][name=region_'+obj.value+']').each(
		function(){ 
			region.append('<option value=\''+this.value +'\'>'+$(this).attr('title')+'</option>');
		}
	);
}
//
function menuhover(obj){
     $(obj).parent().find(".menu_body").slideDown('fast').show();   

     $(obj).parent().hover(function(){   
         $(obj).parent().find(".menu_body").slideUp('slow');   
     });   

}

function submenu(){
//$(document).ready(function(){   
        $(".submenu").hover(function() {  
			var objOffset = $(this).offset();
			var left = objOffset.left;
			var top = objOffset.top + 28;
			$(this).find(".menu_body").css({position:"absolute",top:top,left:left});
			//.width($(this).width()-20)        
         
        	$(this).find(".menu_body").slideDown('fast').show();
            }, function(){   
            $(this).find(".menu_body").slideUp('slow');   
        });   
//});  
}
