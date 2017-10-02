var COMMON = {
	timeset : function() {
		$.ajax('/data/timezone', {
			success: function(data){
				var format = 'YYYY/MM/DD HH:mm:ss';
				var currenttime = setInterval(function(){
					$('#currtime').text(moment().utc().utcOffset(-data.offset).format(format));
				}, 500);
			}
		});
	}
};