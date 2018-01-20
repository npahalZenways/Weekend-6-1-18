var num;
var key;
var arr;
var strArr;
var isTrue = true;
var obj = {
    name: '',
    phone: -1
};
var xyz = 1;
xyz = 10;
xyz = '';
xyz = true;
var jsArr = [1];
var tup;
tup = [1, '', true, {}, 'hgf'];
tup[0] = 1;
tup.push(1);
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 15] = "green";
    Color[Color["yellow"] = 1] = "yellow";
})(Color || (Color = {}));
;
var myColor = Color.green;
var myColorStr = Color[1];
console.log(myColor, myColorStr);
function abc(mynumber) {
    return 0;
}
abc(87654);
function getCompletePadding(padding) {
    if (typeof padding == 'number')
        console.log(padding + 'px');
    else if (typeof padding == 'string')
        console.log(padding);
    else
        ;
    return padding;
}
getCompletePadding(10);
getCompletePadding('20px');
getCompletePadding(true);
function gen(params) {
    return params;
}
gen(1);
gen('sdfg');
gen(true);
var genArray;
var genStrArray;
//# sourceMappingURL=Jan_20.js.map