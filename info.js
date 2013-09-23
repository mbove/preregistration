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