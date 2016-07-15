var MyLoading = function(options) {
	this.loadText = "加载中..."
	if (options.text != undefined) {
		this.loadText = options.text;
	}
	this.init();
}
MyLoading.prototype = {
	init: function() {
		var self = this;
		var _load = self.creatDiv("mc-load").css("border-radius", "10px").appendTo($('body'));
		var _con = self.creatDiv("mc-load-main").appendTo(_load);
		self.text = $("<span></span>").addClass("mc-load-info").html(self.loadText).appendTo(_load);
		//设置位置窗口居中
		_load.css({
			"position": "fixed",
			"top": "50%",
			"left": "50%",
			"margin-left": "-48px",
			"margin-top": "-46px",
			"backgrund-color": "#333"
		}).hide();
		var _conLoad = '<div class="mc-load-spinner">' +
			'<div class="bar1"></div>' +
			'<div class="bar2"></div>' +
			'<div class="bar3"></div>' +
			'<div class="bar4"></div>' +
			'<div class="bar5"></div>' +
			'<div class="bar6"></div>' +
			'<div class="bar7"></div>' +
			'<div class="bar8"></div>' +
			'<div class="bar9"></div>' +
			'<div class="bar10"></div>' +
			'<div class="bar11"></div>' +
			'<div class="bar12"></div>' +
			'</div>';
		_con.html(_conLoad);
		self.load = _load;
	},
	open: function() {
		this.load.show();
	},
	close: function() {
		this.load.hide();
	},
	creatDiv: function(str) {
		return $("<div></div>").addClass(str);
	},
	setContent: function(str) {
		this.text.html(str);
	}
}
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