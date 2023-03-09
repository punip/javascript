const cars = ['audi', 'mercedes', 'bmw', 'i20']
cars.sort();
console.log(cars);



// sort the elements in the ascending order  
const marks = [2, 3 ,5, 3, 2, 7, 8, 10, 9, 2, 3,];
marks.sort((a, b) => a-b );
console.log(marks);

import student, {minMarksNeeded} from "./student.js";

const s1 = new student('puneeth','m',10,95);
const s2 = new student('jill','f',20,99);
const s3 = new student('jane','m',30,44);
const s4 = new student('rey','f',40,35);

const arr = [s1,s2,s3,s4];

console.log(arr);
arr.sort((a,b) => b.marks-a.marks);
console.log(arr);


// create a new array of name of all female students who have scored more than 70 marks
/*
const cr = arr.filter ( s => s.gender === 'f' && s.marks>70).map( s => s.name);
console.log(cr);
*/


// find a student from students array on the basis of roll number
// if student found ,print details of that student
const roll = 34;
const result= arr.find(s=> s.roll=== roll);
if(result) {
    console.log(result.getDetails());
}else {
    console.log('student not found');
}








