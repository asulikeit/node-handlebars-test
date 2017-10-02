var FIBO = {
	init: function(){
		console.log("ready");
	}
};

$(document).ready(function(){
	COMMON.timeset();
	FIBO.init();
});