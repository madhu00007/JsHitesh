//Stack memory(primitive) & Heap memory(non primitive)

let myYoutubename = "codingtalks";
console.log(myYoutubename);//output:codingtalks

let anotherYoutubename= myYoutubename;
anotherYoutubename="codingwalks";
console.log(myYoutubename);//output:codingtalks
console.log(anotherYoutubename);//output:codingwalks

let user = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

console.log(user.email);//output:user@gmail.com
console.log(user.upi);//output:user@ybl

let userTwo =user;
userTwo.email="user@yahoo.com"

console.log(user.email);//output:user@yahoo.com
console.log(userTwo.email);//output:user@yahoo.com