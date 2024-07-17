//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2024, 7, 1);
console.log(myCreateDate.toDateString());

let myCreateNewDate = new Date(2024, 7, 1, 5, 3);
console.log(myCreateNewDate.toLocaleString());

let myCreateDate_1 = new Date("2024-08-01");
console.log(myCreateDate_1.toLocaleString());

/*
Wed Jul 17 2024 17:27:20 GMT+0530 (India Standard Time)
Wed Jul 17 2024
17/7/2024, 5:27:20 pm
object
Thu Aug 01 2024
1/8/2024, 5:03:00 am
1/8/2024, 5:30:00 am
*/