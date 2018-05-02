var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    user: "root",
  
    password: "",
    database: "bamazon"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
    
  });

inquirer.prompt([
    {
        type:"input",
        name:"itemId",
        message:"Type the ID of the item do you whan to buy?",
    },
    {
        type:"input",
        name:"quantity",
        message:"How many do you whant?",
    }
 ]).then (function(answers){
    
    console.log("answer: " + answers.itemId)
    console.log("Quantity: " + answers.quantity)
    deliverOrder(answers.itemId, answers.quantity);
 })

  loadItems()


  function loadItems() {
    connection.query("SELECT * FROM products", function(err, products) {
        if (err) {
            console.log(err)
        }        
        // console.log(products)
        for (var i = 0; i < products.length; i++) {
            console.log("ID: " + products[i].item_id +" |    "
            + "Item Name: " + products[i].product_name +" |            "
            + "Price: " + products[i].price)

        }
    });
}


function deliverOrder(id, quantity){

    connection.query("SELECT * FROM products WHERE ?",{ item_id: id}, function(err, order) {
        if (err) {
            console.log(err)
        }
        if(quantity > order[0].stock_quantity){
            console.log("Insufficient quantity!")
        }else{ 
            var totalCost = quantity * order[0].price;
            console.log("Order: ", order[0].item_id + " | " + " Unitary price= " + order[0].price + " | "+ "total= "+ totalCost);
            updateTable(order[0].stock_quantity, quantity, id);
        }
    });
}

function updateTable(currentQty, orderQuantity, id){
    var newQty = currentQty - orderQuantity;
    connection.query("UPDATE products SET stock_quantity ="+ newQty +" WHERE ?",{ item_id: id}, function(err, order) {
        if (err) {
            console.log(err)
        }  
    });
}