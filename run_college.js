import Professor from "./professor.js";
import student from "./student.js";

const s1 = new student ('puneeth','m',10,90);
//internally
// new --> 4006 student
//student.constructor('puneeth','m',10,90,4006)

const p1 = new Professor('jane','f',['physics','chemistry']);
//console.log(p1);
// internally
// new --> 5007 Professor
// Professor.constructor('jane','f',['physics','chemistry'])

//console.log(s1);
//console.log(p1);
console.log(s1.getDetails());
console.log(p1.getDetails());
//console.log(s1.getGrade());