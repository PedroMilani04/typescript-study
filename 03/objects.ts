const User = {
    name: 'string',
    number1: 12,
    number2: 15
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: 'Pedro', isPaid: false})

const createCourse = ():{name: string, price: number} => {
    return {name: 'TS', price: 0}
}
    

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser2(user: User): User {
    return {name: user.name, email: user.email, isActive: user.isActive}
}


createUser2({name: 'a', email: '', isActive: true})

//-------------------------------------------


type cardNumber = {
    number: string
}

type cardName = {
    name: string
}

type cardAll = cardNumber & cardName & {
    cvv: number
}

const card: cardAll = {
    number: '12345',
    name: 'Pedro',
    cvv: 123
}



export {}