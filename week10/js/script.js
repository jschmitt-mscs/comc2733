let output = document.getElementById("output");
let formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
})

// Apply a method to an object class using a prototype
// create 3 instances of the object and a method to the browser

function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.calculateCost = function(){
    return 0.75 * this.size + 2 * this.toppings.length;
}

let pizza1 = new Pizza(12, "Thin", ["Pepperoni", "Jalapeno"]);
let pizza2 = new Pizza(16, "Regular", ["Pepperoni", "Sausage"]);
let pizza3 = new Pizza(16, "Regular", ["Mushrooms", "Anchovies", "Onion"])

output.innerHTML += "Pizza 1 Cost: " + formatter.format(pizza1.calculateCost()) + "</br>";
output.innerHTML += "Pizza 2 Cost: " + formatter.format(pizza2.calculateCost()) + "</br>";
output.innerHTML += "Pizza 3 Cost: " + formatter.format(pizza3.calculateCost()) + "</br>";

// Create an object literal with
//  - an array as a property
//  - a nested object
//  - a method that returns a property
// Output the results of the method to the web browser

let pizzaOrder = {
    customer: {
        firstName: "Joe",
        lastName: "Schmitt"
    },
    order: [
        new Pizza(12, "Thin", ["Pepperoni", "Jalapeno"]),
        new Pizza(16,"Regular", ["Pepperoni", "Mushrooms"])
    ],
    getOrder: function(){
        return this.order;
    },
    totalCost: function(){
        let total = 0;
        this.order.forEach(element => {
            total += element.calculateCost();
        })
        return total;
    }
}

output.innerHTML += "The total order price is: " + formatter.format(pizzaOrder.totalCost()) + "</br>";

// Create a class constructor with public, private, and privileged methods
// console.log output of public method
// console.log attempt to access private method (should show error)


function Pizza4(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;

    function testMethod(){
        return "This should not work";
    }

    this.addExtraCheese = function(){
        this.toppings.push("Extra Cheese");
        return this.toppings;
    }
}

let pizza4 = new Pizza4(18,"Regular", ["Pepperoni"]);

// console.log(pizza4.testMethod());
console.log(pizza4.addExtraCheese());


// Create a prototype chain to combine objects
// call method of chained object and show output in browser.
// stringify an object above and output the JSON to the browser.

function PizzaTopping(name){
    this.toppingName = name;
}

function PizzaDough(style){
    this.style = style;

}

function Pizza5(size){
    this.size = size;
    this.getPizzaDoughStyle = function(){
        return this.style;
    };
    this.swapStyle = function(style){
        this.style = style;
    };
}

Pizza5.prototype = new PizzaDough();
Pizza5.prototype = new PizzaTopping();

let pizza5 = new Pizza5(18);
pizza5.style = "Regular";
pizza5.toppingName = "Pepperoni";

output.innerHTML += JSON.stringify(pizza5) + "</br>";

pizza5.swapStyle("Thin")

output.innerHTML += JSON.stringify(pizza5) + "</br>";

// import your JSON back into a new object and display a property to the browser.

let json = JSON.stringify(pizza5);
let newPizza5 = JSON.parse(json);

output.innerHTML += JSON.stringify(newPizza5) + "</br>";