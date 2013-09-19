function ticketValidate(){
	var ticket_num = $('[name="ticket_num"]').val();
	ticket_num = parseInt(ticket_num);
	if(ticket_num){
		if(ticket_num>0 && ticket_num<999){
			return true;
		}
	}
	return false;
}

$(document).ready(function(){
	$( ".games" ).sortable();
    $( ".games" ).disableSelection();
});