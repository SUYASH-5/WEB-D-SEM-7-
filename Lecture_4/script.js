// let userData = [
//     {
//         name: "Saurav",
//         age:"21"
//     },
//     {
//         name: "Shivam",
//         age:"22"
//     },
//     {
//         name: "Shashwat",
//         age:"21"
//     },
// ]

// let myname = userData.map(ele=>{
//     return ele.name;
// })
// console.log(myname);

// let filteruse = userData.filter(ele=>ele.age>21)
// console.log(filteruse);
// Promises: promises are always the object which is  used to make or asynchronous task. 

// const shivam = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Shivam got placed with 1cr");
//     }, 2000);
// });

// const shivam = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("Shivam got placed with 1cr");
//     }, 2000);
// });

// console.log(shivam);

// shivam
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .then(
//     ()=>{
//         console.log("Shivam is working in office");
//     }
// )
// .then(
//     ()=>{
//         console.log("Shivam got first project");
//     }
// )
// .then(
//     ()=>{
//         console.log("Shivam execute this project");
//     }
// )
// .catch(
//     (err)=>{
//         console.log(message: ${err});
//     }
// )
// shivam
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(message: ${err});
//     }
// )
// .then(
//     ()=>{
//         console.log("Ja kar Daman khel");
//     }
// )
// .catch(
//     (err)=>{
//         console.log(message1: ${err});
//     }
// )
// .then(
//     ()=>{
//         console.log("Stake me placement le lo");
//     }
// )
// .catch(
//     (err)=>{
//         console.log(message2: ${err});
//     }
// )
// .then(
//     ()=>{
//         console.log("Shivam Jua khelta hai");
//     }
// )
// .catch(
//     (err)=>{
//         console.log(message3: ${err});
//     }
// )
// Promise api 
// Promise.all 
// Promise.allSettled
// Promise.race
// Promise.any

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Assignment 1 working");
//     }, 2000);
// })

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Assignment 2 working");
//     }, 3000);
// })

// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Assignment 3 working");
//     }, 5000);
// })

// const p4 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Assignment 4 working");
//     }, 4000);
// })


// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Assignment 1 not working");
//     }, 2000);
// })

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Assignment 2 not working");
//     }, 3000);
// })

// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Assignment 3 not working");
//     }, 5000);
// })
// const p4 = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         reject("Assignment 4 not working");
    //     }, 4000);
    // })
    
    // Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));
    // if any one promises is not completed then it doesn't work
    // if all resolve then work fine
    // if all rejected then in first reject message 
    
  
    
// Promise.allSettled([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));
//  if all resolve 
/*
[
  { status: 'fulfilled', value: 'Assignment 1' },
  { status: 'fulfilled', value: 'Assignment 2' },
  { status: 'fulfilled', value: 'Assignment 3' },
  { status: 'fulfilled', value: 'Assignment 4' }
]
  */


// if one reject 
/*
[
  { status: 'fulfilled', value: 'Assignment 1' },
  { status: 'fulfilled', value: 'Assignment 2' },
  { status: 'fulfilled', value: 'Assignment 3' },
  { status: 'rejected', reason: 'Assignment 4 not working' }
]
*/

// if all rejected 
/*
[
  { status: 'rejected', reason: 'Assignment 1 not working' },
  { status: 'rejected', reason: 'Assignment 2 not working' },
  { status: 'rejected', reason: 'Assignment 3 not working' },
  { status: 'rejected', reason: 'Assignment 4 not working' }
]
  */


// Promise.any([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));
// if all resolve the give first working not giving all working.
// if 1st reject give 2nd resolve value.
// if all reject 
/*
[AggregateError: All promises were rejected] {
  [errors]: [
    'Assignment 1 not working',
    'Assignment 2 not working',
    'Assignment 3 not working',
    'Assignment 4 not working'
  ]
}
  */
// ASYNC AWAIT

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Assignment 1 completed");
//     }, 2000);
// })

// // function checkData(){
// //     const data = p1;
// //     console.log("If working",p1);
// // }

// async function checkData(){
//     const data = await p1;
//     console.log("If working",p1);
// }

// checkData();
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


// async function fetchprod(){
//     try{
//         let product = await fetch('https://dummyjson.com/products');
//         let data = await product.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log("error: ", err.message);
//     }
// }

// fetchprod();



