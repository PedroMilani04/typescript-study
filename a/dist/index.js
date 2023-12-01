"use strict";
//console.log("aaaaaaaaaaa1 bbbb");
/* class User {
    public email: string // if not marked, public by default
    name: string
    constructor (email: string, name: string) {
        this.email = email
        this.name = name
    }
} */
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCounter() {
        return this._courseCount;
    }
    set courseCounter(courseNum) {
        if (courseNum <= 1) {
            console.log("error 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const pedro = new User("a23", "123");
console.log(pedro);
pedro.name = "aa"; // cant change if name private
//------------------------------
