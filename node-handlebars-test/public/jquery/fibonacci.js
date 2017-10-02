var FIBO = {
	submit: function(){
		var url = '/data/fibonacci?number=' + $('#input_fibo').val();
		
		$.ajax(url, {
			success: function(data){
				$('#span_fibo').text(data.fibonacci);
			}
		});
	},
		
	init: function(){
		$('#submit_fibo').on('click', function(event){
			event.preventDefault();
			FIBO.submit();
		})
	}
};

$(document).ready(function(){
	COMMON.timeset();
	FIBO.init();
});