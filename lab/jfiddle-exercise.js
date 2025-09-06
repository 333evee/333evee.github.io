//Exercise 1: Calculate total sales amount

// Ex1. Problem:
// You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions.

// Input details:

//     An array of objects representing sales transactions. Each object has the following properties:
//         item: Name of the product (string)
//         quantity: Number of units sold (integer)
//         price: Price per unit (float)

// Output details:

//     A single number representing the total sales amount

// Steps to implement:

//     Define an array of sales transactions with at least 3 sample objects
//     Write a function calculateTotalSales that takes this array as input
//     Use a loop to iterate through the array and calculate the total sales amount
//     Print the total sales amount to the console

const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];

function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Ex1. Total Sales Amount:", calculateTotalSales(sales)); 

// Exercise 2: Generate an order receipt

// Ex2. Problem:
// Write a JavaScript program that generates a receipt for a customer's order. The receipt should include each item's name, quantity, price, and total cost.

// Input details:

//     An array of objects representing ordered items. Each object has:
//         item: Name of the product (string)
//         quantity: Quantity ordered (integer)
//         price: Price per unit (float)

// Output details:
//     A detailed receipt showing each item's details and the grand total
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];

function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Ex2. Receipt:");
    console.log("----------------------");
    for (let i = 0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}

generateReceipt(orders);

// Exercise 3: Validate passwords

// Problem:
// Write a JavaScript program to validate a list of passwords. A password is valid if:

//     It contains only alphanumeric characters (letters and numbers)
//     It must be at least 8 characters long, but no more than 20 characters

// Input details:

//     An array of passwords (strings)

// Output details:

//     A message indicating whether each password is valid or invalid
const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];

function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`Ex3. ${passwords[i]} is valid.`);
        } else {
            console.log(`Ex3. ${passwords[i]} is invalid.`);
        }
    }
}

validatePasswords(passwords);







