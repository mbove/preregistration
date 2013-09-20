function infoValidate(){
	var ticket_num = $('[name="ticket_num"]').val();
	ticket_num = parseInt(ticket_num);
	if(ticket_num){
		if(ticket_num>0 && ticket_num<999){
			var ticket_code = $('[name="ticket_code"]').val();
			if(ticket_code.length==5){
				return true;
			}
		}
	}
	$('.directions.first').after("<div class='alert'>Invalid Ticket Number or Code</div>");
	$('input[type="text"]').css('border-color', 'red');
	setInterval(function(){
		$('.alert').hide();
	}, 5000);
	return false;
}
$(document).ready(function(){
	$( ".games" ).sortable();
    $( ".games" ).disableSelection();

    var dataArray = window.location.search.replace('?','').split('&');
    var varMap = {};
    for(var i in dataArray){
    	var temp = dataArray[i].split('=');
    	varMap[""+temp[0]+""] = temp[1];
    }
    console.log(varMap);
});