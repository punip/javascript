import student, {minMarksNeeded} from "./student.js";

console.log(minMarksNeeded);

console.log(student.count);

const s1 = new student('puneeth','m',10,50);
// internally 
// 1. new-> 4005 RAM 
// 2. student.constructor(4005)
// 3. student.constructor('puneeth','m',10,97)

/*s1.name = 'puneeth';
s1.gender = 'm';
s1.roll = 10;
s1.marks = 90;
*/

console.log(student.count);

const s2 = new student('jane','f',18,10);
s2.county = 'India'
/*s2.name = 'jane';
s2.gender = 'f';
s2.roll = 08;
s2.marks = 67;
*/

//console.log(s1);
//console.log(s2);

console.log(s1.getDetails());
// internally
// student.getDetails(s1);

console.log(s2.getDetails());
// internally
// student.getDetails(s2);

console.log(s1.getGrade());
console.log(s2.getGrade());

console.log(student.count);

//static methods
const s3 = student.newInstance('jill','f',18,78)
console.log(s3.getDetails());