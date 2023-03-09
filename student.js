// only 1 default export, but multiple non default exports
//specialized class

import CollegeUser from "./college_user.js";
export default class student extends CollegeUser {
    static count = 0;
    /* 
    // only during the construction of the obejct
    construcotr(this){
        // this-> current object 
        // implicitly 
        return this;
        }
    */ 
   constructor(name,gender,roll,marks) {
    //this -- current object
    // it is complusory to call the parent class constructor from the child class constructor
    // and must b the first statement in the child class constructor
    super(name,gender);
    //internally
    //CollegeUser.Constructor(this)


    
    this.roll = roll;
    this.marks = marks;
    student.count++;
   }

  /* getDetails() {
   // this--> current object
   return `Name: ${this.name}\nroll: ${this.roll}\ngender: ${this.gender}\nmarks: ${this.marks}`;
   }
   */

   getGrade() {
    var  grade;

if  (this.marks > 100 || this.marks < 0) {
     grade = 'I';
}else if (this.marks >= 70) {
    grade = 'A';

}else if (this.marks >= 60){
    grade = 'B';
}else if (this.marks >=  40){
    grade = 'c';

}else { 
    grade = 'F';

}return grade;
}


static newInstance(name,gender,roll,marks) {
    //console.log(this);
    return new student(name,gender,roll, marks);
}

//method overriding 
getDetails() {
    //this-- student,Professor, subclass of CollegeUser
    return `${super.getDetails()}\nRoll: ${this.roll}`;
    }

}

export const minMarksNeeded = 40;



