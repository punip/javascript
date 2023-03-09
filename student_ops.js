
// get details (name,gender,roll,marks
/*
Name:
Gender:
roll:
marks: 
*/

// get grade(marks)
//return the grade

// call the above two functions and print the output on the console


function getDetails(name, gender, roll, marks){
     return  `Name: ${name}\ngender: ${gender}\nroll: ${roll}\nmarks: ${marks} \n`


}
function grade(marks){
    var  Grade;
    if  (marks > 100 || marks < 0)
     {  grade = 'I';
     grade = 'I';
    }else if (marks >= 70) {
        grade = 'A';

    }
    else if ( marks >= 60){
        grade = 'B';
    }
    else if (marks >=  40){
        grade = 'c';

    }
    else { 
        grade = 'F';

}return grade;
}
console.log(getDetails('Puneeth B U','M','4MH18CS065',70));
console.log(grade(70));

const name= 'puneeth';
const gender = 'n';
const roll = 78;
const marks = 89;

console.log(getDetails(name, gender, roll, marks));



