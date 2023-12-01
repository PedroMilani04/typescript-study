type A = {
    nome: string,
    numero: number
}

type B = {
    nome: string,
    bool: boolean
}

let pedro: A | B = {
    nome: "",
    numero: 1
}


//--------------------------

function getDB(id: number | string) {
    if(typeof id === "string") {
        id.toLocaleLowerCase()
    }
}

const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ['1', '2', 32]

export {}