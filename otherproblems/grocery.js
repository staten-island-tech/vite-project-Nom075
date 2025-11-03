const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];


function calc(cart){
    let cost = 0
    cart.forEach((item)=>{
        if (item.price < 5){
            cost += (0.95*(item.price*item.quantity))
        } else{
            cost += (item.price*item.quantity)
        }
    })
    if (cost > 100){
        cost *= 0.9
    }
    console.log(cost)
}

calc(cart)