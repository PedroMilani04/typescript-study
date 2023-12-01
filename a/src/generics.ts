const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
} // can be done like this

function identityTwo(val: any): any {
    return val
} // Receives ANY TYPE of value and can return ANY TYPE of value. Highly discouraged.

function identityTree<Type>(val: Type): Type {
    return val
} // When the type of array that passes through val is detected, the return type becomes the same, it is "logged"

function identityFour<T>(val: T): T {
    return val
} 

interface Bootle {
     brand: string,
     type: number
}

//identityFour<Bootle>({})

//--------------------------

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T=> {
    const myIndex = 3
    return products[myIndex]
}

//--------------------------

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valone: T, valtwo: U) : object { // only U is extending to the Database interface
    return {
        valone,
        valtwo
    }
}

anotherFunction(2, {connection: "a", username: "b", password: "c"})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: number
}

// ---- class with generics ----

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}