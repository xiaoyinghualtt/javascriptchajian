;(function(method){
	method(window,window.document,jQuery);
}(function(win,doc,$){
	$.fn.Supman=function(options){
		//默认参数
		var setting={
			length:100,
			background:"lightblue",
			changeAfter:null,
			width:3,
			color:"#000",
			before:null,
			adding:null,
			after:null,
			css:"Supman"
		}
		//使用用户名参数覆盖参数
		$.extend(setting,options);
		return $.each(this, function(index,obj) {
			$("<span/>").html("+").css("background",setting.background).addClass(setting.css).css("cursor","pointer").click(function(){
				var obj=$(this).prev();
				if(setting.before){
					setting.before(obj,setting,this);
				}
				var isFire=true;
				if(setting.adding){
					isFire=setting.adding(obj,setting,this);
				}
				if(isFire){
					obj.width(obj.width()+setting.width);
				}
//				$(obj).width($(obj).width()+setting.length);
//				if(setting.changeAfter){
//					setting.changeAfter($(obj));
//				}
			}).insertAfter(obj);
		});
	}
}))
