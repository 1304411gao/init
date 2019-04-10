var NameSpace = window.NameSpace || {};
//高
NameSpace.gaozhenghui = new function() {
	//***定义变量***
	this.windowW = $(window).width();
	this.windowH = $(window).height();
	//***定义方法***
	//随机数
	this.random = function(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min);
	};
	//禁用鼠标默认事件的方法
	this.mouseDft = function(_obj) {
		_obj.on("mousemove", function(e) {
			e.preventDefault();
		}).on("mousedown", function(e) {
			e.preventDefault();
		})
	}
};
var g = NameSpace.gaozhenghui; //简化命名空间。

$(function(){
	//***定义当前页面的变量***
	//高
	
	//***定义当前页面的方法***
	//高
	let a = 13;
	let arr = [1, 2, 3, 4,];
	arr.forEach(i=>{
		console.log(i)
		
	})
});
