const score = 400
console.log(score);
console.log(typeof score);

const balance =new Number(100)
console.log(balance);
console.log(typeof balance);
console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const otherNewNumber =123.8966;
console.log(otherNewNumber.toPrecision(3));

const otherOldNumber = 1123.8966;
console.log(otherOldNumber.toPrecision(3));

const otherOld_2_Number = 1123.8966;
console.log(otherOld_2_Number.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8,0.5));
console.log(Math.max(4,3,6,8,0.5));
console.log(Math.random());//value btween 0 and 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

/*
output:
400
number
[Number: 100]
object
100
string
3
100.00
23.9
124
1.12e+3
1124
10,00,000
Object [Math] {}
4
5
5
4
0.5
8
0.6933076360620438
0.8967223515375822
3.116367303057798
10
*/