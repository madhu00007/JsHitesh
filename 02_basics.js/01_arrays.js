//arrays

const myArr =["Tiger","Hrithik"];
console.log(myArr);
console.log(myArr[1]);

//array methods
myArr.push("Salman")
myArr.push("Sharukh")
myArr.pop()
myArr.unshift("Amitabh")
myArr.shift()
console.log(myArr);
console.log(myArr.includes("Amitabh"));
console.log(myArr.indexOf("Amitabh"));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice

console.log("A: ", myArr);
const myn1= myArr.slice(0,1)

console.log(myn1);
console.log("B: ", myArr);

const  myn2 = myArr.splice(0,1);
console.log("C: ", myArr);
console.log(myn2);