
function payment(callback){
    console.log("payment is in progress!");
    setTimeout(()=>{
        console.log("payment is done!");
        callback();
    }, 3000);
}

function PlaceOrder(callback){
    console.log("Your order is processing");

    setTimeout(()=>{
        console.log("Order is placed!");
        callback();
    }, 3000);
}

function pickup(callback){
    console.log("Delivery Boy is heading towards restaurant");
    setTimeout(()=>{
        console.log("Delivery Boy pickup Your Order");
        callback();
    }, 3000);
}

function Delivery(){
    console.log("Delivery Boy is on his way");
    setTimeout(()=>{
        console.log("Order Delivered Safely");
    }, 3000);
}

// payment(PlaceOrder(pickup)); //this is not a valid call because placeOrder(pickup) immediately call the fucntion rather
// than passing placeOrder as an argument, so we use below method to call these types of fucntions

payment(()=>{
    PlaceOrder(()=>{
        pickup(()=>{
            Delivery();
        })
    })
})

// Now this is called callback hell. It's not recommended to code this way because it reduces the code readability.
// Promise use to flatten the callback hell
// Async Await is the modern way to write efficient code

