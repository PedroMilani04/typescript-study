/* 
STANDARD WAY
class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}
}

const p = new TakePhoto("test", "1")
 */
/* 
class Instagram extends TakePhoto {

} */

abstract class TakePhoto { // ABSTRACT is more like a blueprint
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSapia(): void
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter) // need to pass the acquired values
    }

    getSapia(): void {
        console.log("just returning something");
        
    }
} 

const p = new Instagram("test", "1", 3) // can create Instagram, that is extending the "blueprint" that is abstract class