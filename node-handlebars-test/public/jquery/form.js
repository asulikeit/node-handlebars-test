var FORM = {
	validPass: function(str) {
		var regex_pass = /^(?=.*\d)(?=.*[!@#$%^&+=])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return regex_pass.test(str);
	},
		
	submit : function() {
		$('div.alert-success').hide();
		$('div.alert-info').hide();
		var input_pass = $('#input_form').val();
		if (FORM.validPass(input_pass)) {
			$('div.alert-success').show();
		} else {
			$('div.alert-info').show();
		}
	},

	init : function() {
		$('#submit_form').on('click', function(event) {
			event.preventDefault();
			FORM.submit();
		})
	}
};

$(document).ready(function() {
	COMMON.init();
	FORM.init();
});