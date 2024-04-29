// default import class
 
import Nokia from "./mobile.js";

const n = new Nokia();
n.volumeUp();



// named import classs
import {Samsung} from "./mobile.js";

const s = new Samsung();
s.soundUp();

// note that both fun and class can be export and import in same way for named and default


// import default variable
import b from "./mobile.js";
console.log(b);// we may get error but it is syntaticallyu correct bcz in .js file only 1 default export is allowed so we write here for understand only

//named import variable
import {a} from "./mobile.js";
console.log(a);