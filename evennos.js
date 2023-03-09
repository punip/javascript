const n =54;
// a const varaible cannot be reassgined at a later point in the program
// scope of a const variable is block scoped

// while loop 
/*
while (condition) {
    //
    //
}
*/



// for loop
/*
for( init;cond;incr/decr){
    //
    //
    //
}
*/

function evenNos(n) {
    let result = '';
    // scope of a let variable is always block scoped!
for( let i=0; i<=n; i++) {
    if( i % 2 === 0 ){
     result=result +','+ i;
        }
    }
    // console.log(i); // this will not work 
    return result;
}
console.log(evenNos(n));

// priority
// const
// let
// var -- avoid