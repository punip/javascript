var marks = 66;
/*

* >= 70 - A
* >= 60 - B
* >= 40 - C
* < 40 - F
* > 100 OR 0 - I
*/

/*var marks = 56;
if  ((marks > 100) || (marks < 0)) {
    console.log( 'grade I');
}else if (marks >= 70) {
    console.log( 'grade A' );

}else if ( marks >= 60){
    console.log('grade B');
}else if (marks >=  40){
    console.log( 'grade c');

}else { 
    console.log( 'grade F' );

}*/


// if else-if - ** - else
/*
* if (condition ){
    //
    //

}else if (condition){
    //
    //

}else if (condition ){
    //

}else{

}
*/

function grade(marks) {

    let  Grade;
if  (marks > 100 || marks < 0) {
     grade = 'I';
}else if (marks >= 70) {
    grade = 'A';

}else if ( marks >= 60){
    grade = 'B';
}else if (marks >=  40){
    grade = 'c';

}else { 
    grade = 'F';

}return grade;
}
console.log(grade(marks));

