console.log("Script Start");


// setTimeout(()=>{
//     console.log("I am going to market");
// },2000);

// setTimeout(()=>{
//     console.log("I am going to restaurant");
// },4000);

// setTimeout(()=>{
//     console.log("I am eating");
// },3000);



function menucheck(cb){
    console.log("I am Checking menu");
    setTimeout(cb,8000);
}

function foodOrder(){
    console.log("I am ordering food");
    setTimeout(cb, 6000);
}

function havinglunch(){
    console.log("I am having the food");
    setTimeout(cb, 4000);
}

function billpay(){
    console.log("I am paying the bill");
    setTimeout(cb, 2000);
}

function walkawayfromres(){
    console.log("I am leaving the restaurant");
}


console.log("Script End");


// let arr = [2, 3, 4, 5, 6, 7];

// function doubleArrVal(arr) {
//   return arr.map(num => num * 2);
// }

// console.log(doubleArrVal(arr)); 

// let arr = [2, 3, 4, 5, 6, 7];

// function doubleArrVal(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }
//   return result;
// }

// console.log(doubleArrVal(arr)); 



// Arrays.prototype.doubleArrVal = function(arr){
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 2);
//       }
//       return result;

// }

let arr = [2, 3, 4, 5, 6, 7];

Array.prototype.doubleValues = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * 2);
  }
  return result;
};

let doubledArr = arr.doubleValues();
console.log(doubledArr); 
