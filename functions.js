//Reusable
var alert;

function createAlert(message){
	$('.alert').remove();
	$('.directions.first').after("<div class='alert'>"+message+"</div>");
	clearInterval(alert);
	alert = setInterval(function(){
			$('.alert').remove();
		}, 5000);
	$('html, body').animate({ scrollTop: 0 }, 'fast');
}

function highlightField(field_name, color){
	$('[name="'+field_name+'"]').css('border-color', color);
}


//Form Validation


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
function infoValidate(){
	var last_name = $('[name="last_name"]').val();
	var first_name = $('[name="first_name"]').val();
	var phone = $('[name="phone"]').val();
	var email = $('[name="email"]').val();
	var interval;
	$('[type="text"]').css('border', '1px solid gray');
	$('.alert').remove();
	if(!first_name || !last_name || !email){
		createAlert('Please fill in all information');
		if(!first_name){ highlightField('first_name', 'red'); }
		if(!last_name){ highlightField('last_name', 'red'); }
		if(!email){ highlightField('email', 'red'); }
		return false;
	}
	return true;
}
function waiverValidate(){
	if($('[name="waiver"]').is(':checked')){
		return true;
	}
	createAlert("You must agree");
	return false;
}