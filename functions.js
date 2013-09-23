function createAlert(message){
	$('.directions.first').after("<div class='alert'>"+message+"</div>");
	setInterval(function(){
			$('.alert').remove();
		}, 5000);
	$('html, body').animate({ scrollTop: 0 }, 'fast');
}
function highlightField(field_name, color){
	$('[name="'+field_name+'"]').css('border-color', color);
}