// Primitive Datatypes
// String, number, Boolean, null, undefined,Symbol, BigInt

// Reference (Non primitive)
//Array, Objects, Functions

//JavaScript is a dynamically typed language. 
//Because data type will automatically assigned at the time of compilation or 
//code execution.

const score =100;
console.log(typeof score);//output:number

const scoreValue = 100.3;
console.log(typeof scoreValue);//output:number

const isLoggedIn =false;
console.log(typeof isLoggedIn);//output:boolean

const outSideTemp = null;
console.log(typeof outSideTemp);//output:object

const id= Symbol('123')
console.log(typeof Symbol('123'));//output:symbol

const anotherId = Symbol('123')
console.log(typeof Symbol('123'));//output:symbol

console.log(id===anotherId);//output:false

const bigNumber = 12134567890n;
console.log(typeof bigNumber);//output:bigint

const heroes = ["Jul","Jack","Jeet"];
console.log(typeof heroes);//output:object

let myObj ={
    name:"Mrinal",
    age:"18"
}
console.log(typeof myObj);//output:object

const myFunction = function(){
    console.log("Hi!");
}
console.log(typeof myFunction);//output:function

