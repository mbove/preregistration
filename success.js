$(document).ready(function(){
	var dataArray = window.location.search.replace('?','').split('&');
    var varMap = {};
    for(var i in dataArray){
    	var temp = dataArray[i].split('=');
    	varMap[""+temp[0]+""] = temp[1];
    }
    $('#first_name').append(varMap['first_name']);
    $('#last_name').append(varMap['last_name']);
    $('#phone').append(varMap['phone']);
});