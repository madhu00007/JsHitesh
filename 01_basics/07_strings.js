const name ="Mrinal";
const year = 2024;
//concatenation
//console.log(name + year);//output:Mrinal2024
//console.log(name + " " + year);//output:Mrinal 2024

//string interpolation
//console.log(`My name is ${name} and the year is ${year}.`);//output:My name is Mrinal and the year is 2024.

const gameName = new String('Jeet');
// console.log(gameName[0]);//output:J
// console.log(gameName[3]);//Output:t
// console.log(gameName.__proto__);//output:{}-->empty object
// console.log(gameName.length);//output:4
// console.log(gameName.toUpperCase());//output:JEET
// console.log(gameName.toLowerCase());//output:jeet
// console.log(gameName.charAt(0));//output:J
// console.log(gameName.indexOf('J'));//output:0

// const newString = gameName.substring(0,2)
// console.log(newString)//output:Je
// const anothernewString = gameName.substring(0,3)
// console.log(anothernewString);//output:Jee
// const oldString =gameName.slice(-3,3);
// console.log(oldString);//output:ee

// const newStringOne ="    Mrinal     ";
// console.log(newStringOne);//output:"    Mrinal     "
// console.log(newStringOne.trim());//output:"Mrinal"

const url ="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));//output:https://hitesh.com/hitesh-choudhary
console.log(url.includes('%20'));//output:true
console.log(url.includes('sundar'));//output:false

//split command in javascript-MDN web docs