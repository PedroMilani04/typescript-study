"use strict";
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
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // need to pass the acquired values
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSapia() {
        console.log("just returning something");
    }
}
const p = new Instagram("test", "1"); // can create Instagram, that is extending the "blueprint" that is abstract class
