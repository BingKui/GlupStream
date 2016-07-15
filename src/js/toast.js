;
(function($) {
	$.fn.Toast = function(options) {
		return new toast(options, this);
	}
	var toast = function(options, element) {
		var _th = this;
		_th.el = $(element);
		_th.init(options);
	}
	toast.prototype = {
		init: function(options) {
			var _th = this;
			_th.opts = $.extend({}, {
				text: "这个是提示信息。",
				time: 2000,
				callback:function(){}
			}, options);
			_th.toast = $("<div></div>").addClass("ui-toast").appendTo(_th.el);
			_th.toast.html(_th.opts.text).css("margin-left", -(_th.toast.width() / 2));
		},
		open: function() {
			var _th = this;
			_th.toast.animate({
				top: '60px',
				opacity: '1',
				display: 'block'
			});
			_th.animate = setTimeout(function(){
				_th.close();
			}, _th.opts.time);
		},
		close: function() {
			var _th = this;
			_th.toast.animate({
				top: '10px',
				opacity: '0',
				display: 'block'
			});
			clearTimeout(_th.animate);
			_th.opts.callback();
		},
		setContent: function(str) {
			this.toast.html(str).css("margin-left", -(this.toast.width() / 2));
		}
	}
})(jQuery)