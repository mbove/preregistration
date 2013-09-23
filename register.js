function ticketValidate(){
	var ticket_num = $('[name="ticket_num"]').val();
	ticket_num = parseInt(ticket_num);
	var ticket_code = $('[name="ticket_code"]').val();
	$('[type="text"]').css('border', '1px solid gray');
	$('.alert').remove();
	if(!ticket_num || !ticket_code){
		if(!ticket_num){
			highlightField("ticket_num", "red");
		}		
		if(!ticket_code){
			highlightField("ticket_code", "red");
		}
		createAlert("Please fill out all fields");
		return false;
	}
	if(validCode(ticket_num, ticket_code)){
		return true;
	}
	else{
		highlightField("ticket_num", "red");
		highlightField("ticket_code", "red");
		createAlert("Invalid Ticket Number or Code");
		return false;
	}
}
function validCode(ticket_num, ticket_code){
	if(ticket_num==101 && ticket_code=="qwerty"){
		//Ticket combo for a regular player
		return true;
	}
	if(ticket_num==999 && ticket_code=="asdfgh"){
		//ticket combo for a volunteer
		$('form').attr('action', 'volunteer_info.html');
		//redirects form field
		return true;
	}
	return false;
}