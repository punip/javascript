
// create an object
// datatype--- object
const s1 = {
    fullname: 'puneeth b u',
    roll: 10,
    gender: 'm',
    marks: 90,
    getdetails: function () {

        return `Name: ${this.fullname}\nroll: ${this.roll}\ngender: ${this.gender}\nmarks: ${this.marks}`;
    },
    getgrade: function(){
     const marks = this.marks;
        let  Grade;
     if(marks > 100 || marks < 0) {
        grade = 'I';
    }  else if (marks >= 70) {
        grade = 'A';
    
    }  else if ( marks >= 60){
        grade = 'B';
    }  else if (marks >=  40){
        grade = 'c';
    
    }  else { 
        grade = 'F';
    
    }return grade;
    }
      //  console.log(this);// implicit parameter which represents the current object
};
// internally
// 4005 -> RAM
// s1 -> 4005

const s2 = {
    fulllname: 'jane',
    roll: 13,
    gender: 'f',
    marks: 56
};
// internally 
// 5006-> RAM
// s2-> 5006

console.log(s1.fullname);
console.log(s2.roll);

// set the onject attributes 
s1.marks = 95;
s2.roll = 15;
s2.country = 'india'; // end up adding new atttributes to s2 object
console.log(s2);

// delete an attribute from the object

delete s2.country;
//console.log(s2);

//console.log(s1.getdetails());
console.log(s1.getgrade());
// internally 
// s1.getdetails(s1)
//console.log(s2.getdetails());

//console.log(s2.getgrade());


