const marks = [2, 3 ,5, 3, 2, 7, 8, 10, 9, 2, 3, 6, 12];

console.log(marks.every( m => m >5));

/*
// find out whether true or false is any student who has scored less than 2 marks
console.log(marks.some( m=> m<2));
*/


// build up a new array consisting of marks more than 5 from the marks array
/*
let arr = [];
 marks.forEach( m=> {
    if(m>5) {
        arr.push(m);
    }
})
console.log(arr);
*/

const morethan5 = marks.filter(m => m>5 );
console.log(morethan5);

// build a new array consisting of even marks more than 4 from the marks array
const marks1 = marks.filter( m => m % 2 === 0 && m> 4);
console.log(marks1);

// build a new array of marks deducted by 1 from the marks array

const ar = marks.map(m => m-1 );
console.log(ar);

// build a new array of odd elements more than 5 from the marks array and tehn 
// sqaured up in the new array

const br = marks.filter( m=> m % 2 !== 0 && m>5 ).map( m=> m*m )
console.log(br);




