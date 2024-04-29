// default export class 

export default class Nokia {
    volumeUp() {
        console.log("High volume");
    }
}

// named export class
export class Samsung {
    soundUp() {
        console.log("Sound");
    }
}

//default export variable
// export default const b = 50; //syntax error we can not export default variable in this way so
const b = 50;
export default b;

//named export variable
export const a = 10;