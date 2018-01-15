var input = document.getElementById('name');

function print(param){
	console.log('Button is clicked', param)
}

function getValue(value){
	var para = document.getElementById('para');
	para.innerHTML = value;
}

var paragraph = document.getElementById('para');

// element.addEventListener(event_name, callback_function)
input.addEventListener('click', function(event){
	console.log(event);
	event.target.style.color = "red";
	event.target.style.backgroundColor = "blue";
})

function changeStyle(){
	paragraph.style.color = "green";
	paragraph.style.backgroundColor = "yellow";
}

var classVariables = document.getElementsByClassName('myClass');
var small = document.getElementById('error');
small.style.display = 'none';
function validator(input){
	if(input != 'male' && input != 'female'){
		small.innerHTML = 'Input is invalid';
		small.style.display = 'initial';
		small.style.color = 'red';
	} else{
		small.innerHTML = 'Everything is ok';
		small.style.color = 'green';
	}
}