// generalized class
export default class CollegeUser {
    /*
    constructor(this) {
        // this-- 4006 (student object), 5007(Professor object),subclass object of CollegeUser
    }
    */
   constructor(name,gender) {
    // this- student,Professor
    this.name = name;
    this.gender = gender;

   }
   getDetails() {
   //this-- student,Professor, subclass of CollegeUser
   return `Name: ${this.name}\nGender: ${this.gender}`;
   }
}