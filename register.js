function ticketValidate(){
	var ticket_num = $('[name="ticket_num"]').val();
	ticket_num = parseInt(ticket_num);
	var ticket_code = $('[name="ticket_code"]').val();
	var msg = '';
	$('[name="ticket_num"]').css('border', '1px solid gray');
	$('[name="ticket_code"]').css('border', '1px solid gray');
	$('.alert').remove();
	if(!ticket_num || !ticket_code){
		$()
		$('.directions.first').after("<div class='alert'>Please fill out both fields</div>");
		if(!ticket_num){
			$('[name="ticket_num"]').css('border-color', 'red');
		}		
		if(!ticket_code){
			$('[name="ticket_code"]').css('border-color', 'red');
		}
		setInterval(function(){
		$('.alert').remove();
		}, 5000);
		return false;
	}
	if(ticket_num>0 && ticket_num<999 && ticket_code.length==5){
		return true;
	}
	$('[type="text"]').css('border-color', 'red');
	$('.directions.first').after("<div class='alert'>Invalid Ticket Number or Code</div>");
	setInterval(function(){
		$('.alert').remove();
	}, 5000);
	return false;
}