function areaRectangle( length,breadth = 2){
    //breadth is the default argument of the function
    var a = length * breadth;
    return a;
}

function perimeterRectangle( length,breadth = 2) {
    var p = 2 * (length + breadth);
    return p;
}
var length = 5;
var breadth = 2;

var area = areaRectangle(length,breadth);
var perimeter = perimeterRectangle(length,breadth);

console.log(area);
console.log(perimeter);

var l2 = 6;
var b2 = 2;
var a2 = areaRectangle(l2); // readth to take a default value of 2
console.log(a2);
var p2 = perimeterRectangle(l2);
console.log(p2);



