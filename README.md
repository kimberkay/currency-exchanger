# _Tasty Plant Pizza Co._

#### By _**Kim Brannian**_

#### _A website for the Tasty Plant Pizza Co.._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git_
* _GitHub repositories_

## Description

_A website that will allow users to order a basic plant-based pizza and add toppings of their choice._


## Test

  * _Describe: Pizza ()
    Test: It will create a Pizza constructor with properties for size and toppings
    Code: function Pizza(size, toppings){
          this.size = size;
          this.toppings = toppings;
          this.price = 22;
          }
    Expected Output: testPizza {size: 'medium', toppings: Array(1), price: 22}

    Describe: Pizza.prototype.cost ()
    Test: It will create a Pizza.prototype for the cost of pizza when size is selected
    Code: Pizza.prototype.finalPrice = function() {
            if (this.size === "medium") {
            this.price += 0;
          } else if (this.size === "large") {
            this.price += 5;
            }
    Expected Output: testPizza2 {size: 'large', toppings: Array(1), price: 27}

    Describe: Pizza.prototype.cost ()
    Test: It will use the Pizza.prototype to add to the cost of pizza based on toppings choice.
    Code: 
          


## Setup/Installation Requirements

* _Navigate to https://github.com/kimberkay/tasty.plant.pizza_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/kimberkay/tasty-plant-pizza.com"_
* _Open the project with the code editor of your choice_



## Known Bugs

* _Too many bugs_

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_  Kim Brannian 
_