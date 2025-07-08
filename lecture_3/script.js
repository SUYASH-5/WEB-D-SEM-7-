// let cart = ["Shoes", "Shirts", "Wallets"];

// function orderDetail(){
//     // 1. Total no. of products
//     // 2. total amount of products nos*1000
// }

// function orderSummary(){
//     // total price and total products
//     // generate orderId rand() keyword
// }

// function paymentGateWay(){
//     // order id, product details and price, .. Payment is Successful
// }

// function Successful(){
//     // it will all the details about payment and product
// }


// let cart = ["Shoes", "Shirts", "Wallets"];

// // 1. Order Detail
// function orderDetail(callback) {
//     const totalProducts = cart.length;
//     const totalAmount = totalProducts * 1000;
//     console.log(" Order Details fetched...");
//     callback(totalProducts, totalAmount);
// }

// // 2. Order Summary
// function orderSummary(totalProducts, totalAmount, callback) {
//     const orderId = "ORD" + Math.floor(Math.random() * 1000000);
//     console.log(" Order Summary generated...");
//     callback(orderId, totalProducts, totalAmount);
// }

// // 3. Payment Gateway
// function paymentGateway(orderId, totalProducts, totalAmount, callback) {
//     console.log(" Processing Payment...");
//     console.log(`Order ID: ${orderId}`);
//     console.log(`Products (${totalProducts}): ${cart.join(", ")}`);
//     console.log(`Total Amount: ₹${totalAmount}`);
//     console.log(" Payment is Successful");
//     callback(orderId, cart, totalProducts, totalAmount);
// }

// // 4. Final Success Message
// function successful(orderId, cartItems, totalProducts, totalAmount) {
//     console.log("\n🎉 --- Payment Summary ---");
//     console.log(`Order ID: ${orderId}`);
//     console.log(`Products Ordered: ${cartItems.join(", ")}`);
//     console.log(`Number of Items: ${totalProducts}`);
//     console.log(`Total Paid: ₹${totalAmount}`);
//     console.log("Thank you for your purchase! ");
// }
// orderDetail(function (totalProducts, totalAmount) {
//     orderSummary(totalProducts, totalAmount, function (orderId, totalProducts, totalAmount) {
//         paymentGateway(orderId, totalProducts, totalAmount, function (orderId, cartItems, totalProducts, totalAmount) {
//             successful(orderId, cartItems, totalProducts, totalAmount);
//         });
//     });
// });

Array.prototype.mapReplica = function(logic){
    let output = [];
    for(var i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}