// specialized class
import CollegeUser from "./college_user.js";
export default class Professor extends CollegeUser {

    constructor(name,gender,subjects) {
        //this-> 5007 Professor
        super(name,gender); // this is required since professor inherits from CollegeUser
    
        this.subjects = subjects;
    }
}