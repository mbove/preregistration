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