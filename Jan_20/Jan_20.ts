var num : number;
var key : string;
var arr : [number];
var strArr : [string];
var isTrue : boolean = true;
var obj : object = {
	name: '',
	phone: -1
}
var xyz : any = 1;
xyz = 10;
xyz = '';
xyz = true;

var jsArr = [1];
var tup : [number, string, boolean, object, any]; //tuple
tup = [1, '', true, {}, 'hgf'];
tup[0] = 1;
tup.push(1);

//enum

enum Color {red = 5, green = 15, yellow = 1};

var myColor = Color.green;
var myColorStr = Color[1];

console.log(myColor, myColorStr);

function abc(mynumber:number):number{
	return 0;
}

abc(87654);

// unions
function getCompletePadding(padding : number | string): number | string{
	if(typeof padding == 'number')
		console.log(padding+'px');
	else if(typeof padding == 'string')
		console.log(padding);
	else ;
	return padding;
}

getCompletePadding(10);
getCompletePadding('20px');
getCompletePadding(true);

//generics

function gen <T>(params: T) :T{
	return params;
}

gen<number>(1);
gen<string>('sdfg');
gen<boolean>(true);
var genArray : Array<number>;
var genStrArray : Array<string>;
