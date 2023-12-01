/* interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Youtube implements TakePhoto, Story { // when implementing an interface, IT NEEDS to have ALL the information required at the interface
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: boolean // can have more than what was originally in the interface, but NEVER LESS
    ) {}

    createStory(): void {
        console.log("Created story!");
    }
} */