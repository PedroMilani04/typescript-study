function detectionTypes(val: string | number): string | number {
    if(typeof val === "string") {
        return val.toLowerCase()
    }

    return 3
}

function printAll(str: string | string[] | null) {
    if(str) {
        if(typeof str === "object") {
            for(const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}

// ---- In ----

interface User {
    email: string,
    name: string
}

interface Admin {
    email: string,
    name: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        console.log("Is admin");
    } else {
        console.log(User);
        
    }
}

// Instanceof and type predicates

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish { // just like stated here
    return (pet as Fish).swim !== undefined // if the paramete "swim" IS DEFINED, the function will return the pet AS A FISH ^^^
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

// Discriminated Union

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sides: 4
}

type Shape = Circle | Square

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.sides * shape.sides
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}