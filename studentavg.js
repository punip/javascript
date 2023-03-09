import student from "./student";

const students = [
    new student ('puneeth','m',10,90),
    new student('jane','f',11,80),
    new student('jill','m',12,50),
    new student ('rey','f',13,25) 
];

let sum = 0;
for (const student of students) {
    sum+= student.marks;

    
}
console.log(sum/student.count);