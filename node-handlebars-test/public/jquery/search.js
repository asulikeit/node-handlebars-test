var SRCH = {
	init: function(){
		var keyword = $('span.hidden').text();
		if(keyword) {
			$('#gsc-i-id1').val(keyword);
			$('input.gsc-search-button').trigger('click');
		}
	}
};

$(document).ready(function(){
	COMMON.init();
});

$(document).ready(function(){
	SRCH.init();
});