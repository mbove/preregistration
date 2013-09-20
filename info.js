function infoValidate(){
	var last_name = $('[name="last_name"]').val();
	var first_name = $('[name="first_name"]').val();
	var phone = $('[name="phone"]').val();
	var email = $('[name="email"]').val();
	var interval;
	$('[type="text"]').css('border', '1px solid gray');
	$('.alert').remove();
	if(!first_name || !last_name || !phone || !email){
		$('.directions.first').after("<div class='alert'>Please fill in all information</div>");
		if(!first_name){ $('input[name="first_name"]').css('border-color', 'red'); }
		if(!last_name){ $('input[name="last_name"]').css('border-color', 'red'); }
		if(!phone){ $('input[name="phone"]').css('border-color', 'red'); }
		if(!email){ $('input[name="email"]').css('border-color', 'red');}
		interval = setInterval(function(){
			$('.alert').hide();
		}, 5000);
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		return false;
	}
	if(phone.length < 10){
		$('.directions.first').after("<div class='alert'>Invalid Phone Number</div>");
		interval = setInterval(function(){
			$('.alert').hide();
		}, 5000);
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		return false;
	}
	return true;
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