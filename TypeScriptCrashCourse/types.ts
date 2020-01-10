let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

// Tuple is an Array with a DEFINED NUMBER of elements
let strNumTuple: [string, number];

myString = "hello world";
myNum = 3;
myBool = false;
myVar = true;

strArr = ["Hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, true, false];

strNumTuple = ["Holla", 3];

// Void is used for a "no data type"
let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = null;

console.log(myVoid);
