// function greet() {
//   console.log(this.animal, "typically sleep between", this.sleepDuration);
// }

// const obj = {
//   animal: "cats",
//   sleepDuration: "12 and 16 hours",
// };

// greet.call(obj); // cats typically sleep between 12 and 16 hours


// function welcomeStudents(welcomeMessage, goodbyeMessage){
//     console.log(welcomeMessage + this.sname + " is student form  class " + this.sclass + goodbyeMessage);
// }

// let student1 = {
//     sname: "Saurav",
//     sclass: "G4"
// }

// let student2 = {
//     sname: "Shivam",
//     sclass: "G4"
// }

// welcomeStudents.call(student1, "Good Morning ", " Good bye");
// welcomeStudents.call(student2);


// bind
// function welcomeStudents(welcomeMessage, goodbyeMessage){
//     return ${welcomeMessage} ${this.sname} is student form  class ${this.sclass} ${goodbyeMessage};
// }

// welcomeStudents.bind(student1, ["Good Morning ", " Good bye."]);
// const fun = welcomeStudents.bind(student1, "Good Morning ", " Good bye.");
// console.log(fun())
// welcomeStudents.bind(student2,"Good Evening ", " Bye bye.");


// Function.prototype.myCall = function(context, ...args) {
//     context = context || globalThis;
//     const fnSymbol = Symbol(); // avoid name collision
//     context[fnSymbol] = this;
//     const result = context[fnSymbol](...args);
//     delete context[fnSymbol];
//     return result;
// };




//Curring

// function sumOfthree(){
//     console.log(a+b+c);
// }
// sumOfthree(4,5,6);

// function sumOfthree(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         };
//     };
// }

// sumOfthree(20)(10)(5);

// function sumOfthree(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }
// console.log(sumOfthree(20)(10)(5));




const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// grandParent.addEventListener("click",()=>{
//     console.log("Grand Parent clicked");
// })

// parent.addEventListener("click",()=>{
//     console.log("Parent clicked");
// })

// child.addEventListener("click",()=>{
//     console.log("Child clicked");
// })


// behaviour change while applying true in addEventListener
grandParent.addEventListener("click",()=>{
    console.log("Grand Parent clicked");
},true)

parent.addEventListener("click",()=>{
    console.log("Parent clicked");
},true)

child.addEventListener("click",()=>{
    console.log("Child clicked");
},true)