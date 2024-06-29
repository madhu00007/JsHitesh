const accountId= 144553;
let accountEmail = "hitesh@google.com";
var accountPassword="12345";
accountCity = "Jaipur";
let accountState;

//accountId= 2; //not allowed
accountEmail="hc@hc.com";
accountPassword="223344";
accountCity="Bombay";

/*
Prefer not to use var because of issue in block scope and functional scope.

*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);