var times = 0;

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

( function($) {

	$
			.extend( {
				add2cart : function(source_id, target_id, productId,
						productName, singlePrice, qtyObj, callback) {					
					var source = $('#' + source_id);
					var target = $('#' + target_id);
					var cartitem = $('#item-' + productId);
					$(".panierhide").show();
					if (cartitem.size() == 1) {
						var qty = parseInt(cartitem.find('span.quantity')
								.html())
								+ parseInt(qtyObj.value);
						cartitem.find('span.quantity').html(qty);
						cartitem.find('span.price')
								.html(
										parseFloat(singlePrice * qty)
												.toFixed(2) + '&euro;');
					} else {
						var productNameShort = productName;
						if(productNameShort.length>10) productNameShort = productNameShort.substr(0,10)+"..";
						var table = document.getElementById('carttable');
						var newTr = table.insertRow(1 );
						newTr.id = 'item-' + productId;
						var td = newTr.insertCell(0);						     
						    td.innerHTML  = '<span class="quantity" >'+qtyObj.value+'</span>';
						    td.innerHTML += '<span >&nbsp;x&nbsp;</span>';
						    td.innerHTML += '<span title="'+productName+'">'+productNameShort+'</span>';
						    td.align="left";
						td = newTr.insertCell(1);
						td.innerHTML  = '<span class="price">'+parseFloat(singlePrice * parseInt(qtyObj.value)).toFixed(2)+'&euro;</span> ';
						td.innerHTML += '<a href="action/removefromcar.jsp?shoppingCar-articleId='+productId+'"><img src="images/Recover.gif" /></a>';
						td.className = "al_r";
						cartitem = $('#item-' + productId);
					}

					var shadow = $('#' + source_id + '_shadow');
					if (!shadow.attr('id')) {
						$('body')
								.prepend(
										'<div id="' + source.attr('id') + '_shadow" style="display: none; border: solid 1px darkgray; position: static; top: 0px; z-index: 100000;">&nbsp;</div>');
						var shadow = $('#' + source.attr('id') + '_shadow');
					}

					if (!shadow) {
						alert('Cannot create the shadow div');
					}

					shadow.width(source.css('width')).height(
							source.css('height')).css('top',
							source.offset().top).css('left',
							source.offset().left).css('opacity', 0.8).show();
					shadow.css('position', 'absolute');

					shadow.animate( {
						width :cartitem.innerWidth(),
						height :cartitem.innerHeight(),
						top :cartitem.offset().top,
						left :cartitem.offset().left
					}, {
						duration :300
					}).animate( {
						opacity :0
					}, {
						duration :50,
						complete : function() {
							shadow.remove();
							//cartitem.find('span.quantity').css({backgroundColor:"green"}).animate({backgroundColor:"#FFF"},600);
							times = 0;
							setTimeout("flashNumber("+productId+")", 100);
							callback
						}
					});

				}
			});
})(jQuery);

function flashNumber(productId)
{
	if(times>3)
		return;
	if(times%2==0)
		$('#item-' + productId).find('span.quantity').css({"background-color":"#000","color":"#fff"});
	else
		$('#item-' + productId).find('span.quantity').css({"background-color":"#fff","color":"#000"});
	times ++;
	setTimeout("flashNumber("+productId+")", 50);
}

function deleteCartItem(source_id, target_id, callback) {
	var source = $('#' + source_id);
	var target = $('#' + target_id);

	var shadow = $('#' + source_id + '_shadow');
	if (!shadow.attr('id')) {
		$('body')
				.prepend(
						'<div id="' + source.attr('id') + '_shadow" style="display: none; background-color: #ddd; border: solid 1px darkgray; position: static; top: 0px; z-index: 100000;">&nbsp;</div>');
		var shadow = $('#' + source.attr('id') + '_shadow');
	}

	if (!shadow) {
		alert('Cannot create the shadow div');
	}

	shadow.width(source.css('width')).height(source.css('height')).css('top',
			source.offset().top).css('left', source.offset().left).css(
			'opacity', 0.8).show();
	shadow.css('position', 'absolute');

	shadow.animate( {
		width :target.innerWidth(),
		height :target.innerHeight(),
		top :target.offset().top,
		left :target.offset().left
	}, {
		duration :200
	}).animate( {
		opacity :0
	}, {
		duration :50,
		complete : function() {
			source.remove();
			shadow.remove();
			callback
		}
	});

}