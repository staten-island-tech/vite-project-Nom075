## **Word Problem: The Grocery Checkout Challenge**

You’re coding a checkout system for the local grocery store, *CodeMart*.
Each item the customer buys is stored in an array of **objects**, where each object contains:

* `name`: the item’s name (string)
* `price`: the cost of one unit (number)
* `quantity`: how many the customer bought (number)

Here’s an example of the cart:

```js
const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];
```

###  Rules

1. Any **item** that costs **less than $5** gets a **5% discount** on that item.
2. After all items are totaled (after those small discounts),
   if the **total cost** is **$100 or more**, apply an **extra 10% discount** on the final total.
3. Display the final price to two decimal places.

---

### **Your Task**

Write JavaScript code that:

1. Loops through the array and calculates each item’s subtotal (`price × quantity`).
2. Applies the **5% discount** where appropriate.
3. Adds all subtotals together.
4. Checks if the final total is **$100 or more** and applies the **extra 10% discount** if needed.
5. Prints the final total amount due.

---

### 💡 **Example Expected Output**

```
Your final total is $82.67 after all discounts.
It can also be 82.68 if you're a cool kid and know why
```