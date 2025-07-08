// Promises:- promises are the object in js that take care of async
// .then always work in synchronously 

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve p1");
    },3000);
})

promise1.then((res)=>{
    console.log(res)
})
.then(()=>{
    setTimeout(() => {
        console.log("p2")
    }, 2000);
})
.then(()=>{
    setTimeout(() => {
        console.log("p3")
    }, 5000);
})
.then(()=>{
    setTimeout(() => {
        console.log("p4")
    }, 4000);
})
.catch((err)=>{
    console.log("Error: ", err.message);
})       





// Promises:- promises are the object in js that take care of async
// .then always work in synchronously 

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise Resolve p1");
//     },3000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolve p2");
//     },4000);
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolve p3");
//     },5000);
// })



promise1.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("Error: ", err.message);
})
.then(()=>{
    setTimeout(() => {
        console.log("p2")
    }, 2000);
})
.catch((err)=>{
    console.log("Error: ", err.message);
})
.then(()=>{
    setTimeout(() => {
        console.log("p3");
    }, 5000);
})
.catch((err)=>{
    console.log("Error: ", err.message);
})
.then(()=>{
    setTimeout(() => {
        console.log("p4")
    }, 4000);
})
.catch((err)=>{
    console.log("Error: ", err.message);
})



// promise1.then((res)=>console.log(res))
// promise2.then((res)=>console.log(res))
// promise3.then((res)=>console.log(res))






// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolve p1");
//     },3000);
// })


// function something(message, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("promise resolved ", message);
//             resolve("Promise Resolved: ", message);
//         }, delay);
//     })
// }


// promise1
// .then((res)=> console.log(res))
// .catch((err)=>{
//     console.log("Error: ", err);
// })
// .then(()=>{
//     return something("p2", 4000);
// })
// .catch((err)=>{
//     console.log("Error: ", err);
// })
// .then(()=>{
//     return something("p3", 3000);
// })
// .catch((err)=>{
//     console.log("Error: ", err);
// })
// .then(()=>{
//     return something("p4", 1000);
// })
// .catch((err)=>{
//     console.log("Error: ", err);
// })