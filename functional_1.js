const marks = [2, 3, 5, 3, 2, 7, 8, 10, 1, 2, 3, 10, 10, 10, 0, 1, ];

// print all the marks greater than 5

console.log('********** All marks more than 5 *********');

// functional programming
/*
marks.forEach( m=> {
    if (m>5) {
        console.log(m);
    }
}); */


 /*marks.forEach(function(m) {
    if (m>5) {
        console.log(m);
    }
});
/
/*
for (const m of marks) {
    if(m>5) {
        console.log(m);
    } 
}
*/
// print all the odd marks more than 3 
console.log('******** all odd more than 3 **************');
/*
marks.forEach(function(m) {
    if(m % 2 !== 0 && m > 3) {
        console.log(m);
    }
});
*/

/*
for (const m of marks) {
    if(m % 2 !==0 && m > 3) {
        console.log(m);
    }
}
*/

console.log('****** all who score 10 and less than 2');

marks.forEach(function(m) {
    if(m === 10 || (m<2)) {
        console.log(m);
    }
});

