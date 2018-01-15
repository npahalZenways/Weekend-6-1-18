
//constants
const ownerName = 'Nitin';

//rest parameters
//es5
function abc(a,b){
	console.log(a,b);
}
abc(1,2,2,3,4,5,6,67,8,8);

//es6
function bcd(...c){
	console.log(c);
}
bcd(1,2,2,3,4,5,6,67,8,8,1,2,2,3,4,5,6,67,8,8);

//string interpolation || multi line strings
//multi line strings
var str = `
	djzhxvckdbzx
	djzxcv 
	jzdcxv''var
	djzxcv 
	sdzcxv
	ffcgbv
`;
console.log(str)
var a = 10;
var b = 20;
var c = 30;
console.log('a is: ', a, 'b is: ', b, 'c is: ', c);

//string interpolation
console.log(`a is: ${a} b is: ${b} c is: ${c}`);

//scope
function abc1(){
	var myVar = 10;
	// console.log(myVar)
	return function bcd(){
		console.log(myVar); // accessible because of lexical scoping
	}
}
var returned = abc1();
if(true){
	var myVar1 = 20; //scope of this variable is global
	let myVar2 = 30; //using let, we can declare block scoped variable
	console.log(myVar2);
}
console.log(myVar1);

//arrow functions
//es5
var arr = function(param){ console.log(param); }
//es6
// (parameters) => { function_body }
var arrES6 = param => console.log(param);

//destructuring

var myArray = [1,2,3,4,5];
//es5
var first = myArray[0];
var second = myArray[1];

//es6
var [_first,,_third] = myArray;

//property shorthand
var name = 'nitin';
var phone = 123456;
var newName = 'amit';
var newPhone = 98765;

//es5
obj = {
	name: name,
	phone: phone
}
//es6
obj1 = { newName, newPhone }

//classes
//es5

var myClass = function(name, phone){
	this._name = name;
	this._phone = phone;
}
myClass.prototype = {
	set setName(name){
		this._name = name;
	},
	set setPhone(phone){
		this._phone = phone;
	},
	get getName() {
		return this._name;
	},
	get getPhone(){
		return this._phone;
	}
}
var myClassObj = new myClass('kjhgf', 9876);

//es6
class keyClass{
	constructor(name, phone){
		this._name = name;
		this._phone = phone;
	}
	set setName(name){
		this._name = name;
	}
	get getName(){
		return this._name;
	}
}

keyObj = new keyClass('jhygf', 8765);