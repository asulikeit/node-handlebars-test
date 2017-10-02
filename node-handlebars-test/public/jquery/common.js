var COMMON = {
	eventSearch : function() {
		$('#button_search').on('click', function(event) {
			event.preventDefault();
			$(location).attr('href', '/search?keyword='+$('#input_search').val());
		})
	},
		
	timeset : function() {
		$.ajax('/data/timezone', {
			success : function(data) {
				var format = 'YYYY/MM/DD HH:mm:ss';
				var currenttime = setInterval(function() {
					$('#currtime').text(moment().utc().utcOffset(-data.offset).format(format));
				}, 500);
			}
		});
	},

	init : function() {
		this.timeset();
		this.eventSearch();
	}
};
