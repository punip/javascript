import student, {minMarksNeeded} from "./student.js";

console.log(minMarksNeeded);

console.log(student.count);

const s1 = new student('puneeth','m',10,50);


console.log(student.count);

const s2 = new student('jane','f',18,10);
s2.county = 'India'

//console.log(s1.getDetails());


//console.log(s2.getDetails());
// internally
// student.getDetails(s2);

/*console.log(s1.getGrade());
console.log(s2.getGrade());

console.log(student.count);
*/

//static methods
const s3 = student.newInstance('jill','f',18,78);
console.log(s3.getDetails());
const s4 = student.newInstance('rey','m',27,44);

const studentMarks = [s1,s2,s3,s4];

let sum=0;

for (const student of studentMarks) {
    sum+= student.marks;
    
}
console.log(sum/student.count);

