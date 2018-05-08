# bamazon
bamazon is a `node.js` and `mysql database` back end application that handle sales in store and it's management featured like below.

## bamazonCustomer
`bamazonCustomer` introduce the available stock to customers including:
1. `The Product ID`
2. `The Product name`
3. `The Product price`
Then get orders from customers with tow input prompt that match the product ID and the quantity needed by the customer.
* Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
* If the store does have enough of the product ordered, the application will fulfill the customer's order and update the stock by substacting the delivered quantity from the stock.
* If the store does not have enough of the ordered product, the application will prompt a message that says "`Insufficient quantity available!.

## bamazonManager

`bamazonManager` is another feature of the application dedicated to the management of the store administration.
the application prompts a question `Select what you want to do` with the 4 options below:
1. `View Products for Sale`
2. `View Low Inventory`
3. `Add to Inventory`
4. `Add New Product`

Each option guide has a different functionality as described below.

#### View Products for Sale:
   When the manager selects `View Products for Sale`, 
   the application lists all avalaible products in the store incliding: the products'IDs, names, prices, and quantities.

#### View Low Inventory:
   When the manager selects `View Low Inventory`, 
   the application lists all the products with an inventory count lower than five.
#### Add to Inventory:
   When the manager selects s`Add to Inventory`,
the application will display a prompt that will let the manager "add more" of any product currently in the store by typing the products'Id and The new quantiy ordered.
   
#### Add New Product:
   When the manager selects `Add New Product`,
the application will allow the manager to add a completely new product to the store inventory by adding:
1. `The Product name`
2. `The departement`
3. `The Product price`
4. `The quantity`

## Note:
With bamazon's features, the goal is to make the shopping experence eazy for customers and give the store administrators a lot of flexibillity in the management of the inventory.

#### Application repository: https://taylor-yao.github.io/bamazon/

#### By Taylor A. Yao
 Email: yaotaylor25@gmail.com
 
 Phone: +1 404-862-9078
 
 Linkdin: https://www.linkedin.com/in/taylor-yao-a75325153/




