;(function(method){
	method(window,window.document,jQuery);
}(function(win,doc,$){
	$.fn.Superplus=function(options){
		//默认参数
		var setting={
			length:3,
			color:"blue"
		};
		$.extend(setting,options);
		return $.each(this, function(index,obj) {
			$("<span/>").html("+").css("cursor","pointer").css("color",setting.color).click(function(){
				$(obj).width($(obj).width()+setting.length);
			}).insertAfter(obj);
		});
	}
}))
