//var n = 7;

// branching statements
// if - else
/* 
if (condition) { // condition -> ture,false, truthy, fasly
    //
    //
}else {
    //
    //
}
*/

// ternary operator
/*
var ans = n % 2 ? 'is odd' : 'is even'
console.log(ans);

if (n % 2 ){
    console.log('is even');
}else{
    console.log(' is odd ');
}
*/


function isEvenOdd(n){
    var ans = n % 2? 'is odd' : 'is even';
    return ans;
}
console.log( isEvenOdd(7))

