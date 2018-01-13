
//functions
function function_name(/* parameters */){
	//function body | expressions
}

function test(a){
	// console.log('Hi this is a test function');
	return a;
}

var myVariable = test; //assigning a function to a variable
var returned = test('hello'); //assigning a value returned from function test
// console.log(returned);

function outer(){
	return function inner(){
		return 'hello from inner function';
	}
}
var a = outer;
var b = a();
var c = b();

//Anonymous function
var any = function(){
	console.log('Anonymous function');
};

// IIFE (Immediately invoking function expression) / Self-invoking function
(function(){
	console.log('This is an IIFE');
})();

//callbacks
function function_callback(param){
	console.log(">>2<<", param, " executing callback")
}

function consumeCallback(param2){
	console.log(">>1<< starting callback")
	param2('calling it');
	console.log(param2);
	console.log(">>3<< completed callback")
}

// consumeCallback(function_callback);

consumeCallback(function(param){
	console.log(">>2<<", param, " executing callback")
})

// setTimeout - 1000 = 1 sec

// setTimeout(function(){ console.log('timeout called')}, 3000);

//setInterval
// setInterval(function(){ console.log('interval called') }, 3000);

//promises
var testingString = "this is k";
var myPromise = new Promise(function(resolve, reject){
	if(testingString == 'this is ok'){
		setTimeout(function(){
			resolve('resolved text')
		}, 3000);	
	} else {
		setTimeout(function(){
			reject('rejected text')
		}, 2000);
	}
});
// then will be called when promise is resolved, catch will be called when promise is rejected
myPromise.then(function(response){
	console.log('then is called', response)
}).catch(function(error){
	console.log('catch is called', error)
})