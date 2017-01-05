
function changeURL(url) {
	document.location = url;
}
//增加num控件值 +1
function addNum(obj) {
	var num = parseInt(obj.value);
	obj.value = num + 1;
}
//减num控件值 -1
function subtractNum(obj) {
	var num = parseInt(obj.value);
	if (num > 1) {
		obj.value = num - 1;
	}
		//obj.value = num - 1;
}
//提交购物车 obj是num控件, id是产品id
function AddToCar(obj, id) {
	if (isNaN(parseInt(obj.value))) {
		alert("Le nombre de nombre requis de shopping");//购物数量必须填写数字
		return false;
	} else {
		$.post("action/addtocart.jsp", {"shoppingCar-articleId":id, "shoppingCar-articleQuantity":obj.value}, function (data) {
			$(".TotalCommodityPrice").css("display", "");
			$("#car-price").html(data.total);
		}, "json");
	}
	
	$.post("action/tags.jsp", {"shoppingCar-articleId":id});
		
	return true;
}

//判断当前营业时间
function nowTime(A1, A2, B1, B2, B3, B4, B5, B6, B7) {
	$.ajax({type:"GET", url:"action/opentime.jsp", data:{}, async:false, cache:false, success:function (msg) {
		msg = trim(msg);
		if (msg.length < 10) {
			notFemerTime(A1, A2, B1, B2, B3, B4, B5, B6, B7);
		} else {
			$.prompt(msg, {buttons:[{title:"OUI", value:true}, {title:"NON", value:false}], submit:function (v, m, f) {
				if (v) {
					showUserCP();
					if (AddToCar(A1, A2)) {
						$.add2cart(B1, B2, B3, B4, B5, B6, B7);
					}
				}
			}});
		}
	}, error:function (XMLHttpRequest, textStatus, errorThrown) {
		alert(XMLHttpRequest.responseText);
	}});
}

//
function notFemerTime(A1, A2, B1, B2, B3, B4, B5, B6, B7){
	showUserCP();
	if (AddToCar(A1, A2)) {
		$.add2cart(B1, B2, B3, B4, B5, B6, B7);
	}
}
//
function showUserCP(){
	$.ajax({type:"GET", url:"action/useCP.jsp", data:{}, async:false, cache:false, success:function (msg) {
		msg = trim(msg);
		if (msg.length > 10) {
			showUseCP();
		}
	}, error:function (XMLHttpRequest, textStatus, errorThrown) {
		alert(XMLHttpRequest.responseText);
	}});
}

//退出
function Loginout() {
	if (confirm("Que ce soit pour un cong\xe9")) {
		document.location = "LoginoutServlet";
	}
}
function normal() {
	$(document).ready(function () {
		$("#menu_normal").addClass("menu_lock");
	});
}
function offer() {
	$(document).ready(function () {
		$("#menu_offer").addClass("menu_lock");
	});
}