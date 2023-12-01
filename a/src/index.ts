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

    protected _courseCount = 1
    constructor (public email: string, public name: string) {
        this.email = email
        this.name = name
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCounter(): number {
        return this._courseCount
    }

    set courseCounter(courseNum) { //cant have a type
        if (courseNum <= 1) {
            console.log("error 1");
            
        }
        this._courseCount = courseNum
    }


    
}


class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}


const pedro = new User("a23", "123")

console.log(pedro);

pedro.name = "aa" // cant change if name private

//------------------------------

