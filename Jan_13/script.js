console.log(x, y);

//declrartion

var x;

//initialization

var y = 10;
console.log(y)


// program fter hoisting

var x, y;
console.log(x,y);
y = 10;
console.log(y);

// && is always searching for a false value
0 && null && undefined && false && ''
//returns 0
1 && null && undefined && false && ''
//returns null
1 && 'sdfgb' && true && 98765
//returns 98765

// || is always searching for a true value
0 || null || undefined || false || ''
//returns ""
0 || null || undefined || 1 || ''
//returns 1
0 || 'jhgfd' || undefined || 1 || ''
//returns "jhgfd"

arr = [1,2,3,4,5]
arr.length //returns 5
arr.indexOf(6) //returns -1
arr.indexOf(3) //returns 2

arr = [1,2,3,4,5,6];
arr.slice(2, 4) //first parameter/index is included, second parameter/index is excluded
//returns [3, 4]

// splice(starting index, number of deletions)
arr.splice() //makes changes in original array

//forEach(function(currentValue, index, array))
arr.forEach(function(c, i, a){
	console.log(c, i, a);
})
//its return type is undefined

arr.filter(function(item){
	return item % 2 == 0;
})
// returns new filtered array

arr.reduce(function(sum, item){
	return sum + item;
}, 0)
//returns reduced value

arr.reduce(function(mul, item){
	return mul * item
}, 1)

arr.map(function(item){
	return item * 2;
})
//returns an array of same length with the value returned;

arr.push('kjhgfd')
4 //returns new length
arr
(4) ["hello", "hello2", "bye", "kjhgfd"]

arr.pop()
"kjhgfd" // returns element removed

arr.unshift(7)
4 //returns new length

arr.shift()
7  // returns element removed

str = "hello this is a string"
"hello this is a string"

str.length
22 //returns length

str.indexOf('s')
9 //returns index

str.concat('kjhgfd')
"hello this is a stringnewkjhgfd" //returns new string (doesn't make any changes in old string)

str.split();
["hello this is a stringnew"]

str.split(" ")
(5) ["hello", "this", "is", "a", "stringnew"]

str.slice(2, 5)
"llo"

str.slice(2, 6)
"llo "

Ustr = str.toUpperCase()
"HELLO THIS IS A STRINGNEW" //returns string in uppercase

Ustr.toLowerCase()
"hello this is a stringnew" //returns string in lowercase
