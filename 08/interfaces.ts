interface User1 {
    readonly dbId: number
    email: string,
    start(): string,
}

// re-opening of the interface
interface User1 {
    github?: string
}

interface Admin extends User1 {
    role: "admin" | "ta" | "abc"
}

const pedro: Admin = {
    dbId: 22, email: "aaa", start: () => {
        return "tomorrow"
    }, github: "mine", role: "abc"
}

pedro.start = () => {
    return "next week"
}

export { }