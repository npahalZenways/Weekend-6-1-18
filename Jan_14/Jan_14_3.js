//callbacks

function abc(param){
	console.log('abc called');
	param();
	console.log('call completed')
}


abc(function(){
	console.log('bcd called');
});


function filterCallback(currentValue, index, array){
	console.log(currentValue, index, array);
}

var currentValue = 10;
var index = 3;
var array = [1,2,3]

filterCallback(index, array, currentValue);