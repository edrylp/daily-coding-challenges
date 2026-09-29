# Day 014 - Vending Machine

**Source:** [Codewars - Vending Machine](https://www.codewars.com/kata/586e6d4cb98de09e3800014f)

## Problem

# Introduction

<pre style="white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;">
A vending machine is a machine that dispenses items such as snacks and beverages to customers automatically, after the customer inserts currency or credit into the machine. The first modern vending machines were developed in England in the early 19th century and dispensed postcards. (Source <a href="https://en.wikipedia.org/wiki/Vending_machine">Wikipedia</a>)
</pre>

<center><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/vendingmachine.jpg" alt="Vending Machine"></center>

# Task

<pre style="white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;">
In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called <font color="#A1A85E">VendingMachine</font> with at least one method called <font color="#A1A85E">vend</font>. On creation of a new instance of <font color="#A1A85E">VendingMachine</font> the <font color="#A1A85E">items</font> Array and <font color="#A1A85E">Initial vending machine money</font> is passed. The <font color="#A1A85E">vend</font> method should take two arguments <font color="#A1A85E">1. Selection code of the item (not case sensitive)</font> and <font color="#A1A85E">2. Amount of money the user inserts into the machine.</font>
</pre>

An example call of the <font color="#ebf265">vend</font> method
```c
machine.vend("A01", 0.90)
```
where the selected item is `A01` and the money given to the machine is `90p`

An example of the items Array is below
```ruby
items = [{:name=>"Smarties", :code=>"A01", :quantity=>10, :price=>0.60},
         {:name=>"Caramac Bar", :code=>"A02", :quantity=>5, :price=>0.60},
         {:name=>"Dairy Milk", :code=>"A03", :quantity=>1, :price=>0.65},
         {:name=>"Freddo", :code=>"A04", :quantity=>1, :price=>0.25}]
```
```javascript
var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];
```
```python
items = [{'name':"Smarties", 'code':"A01", 'quantity':10, 'price':0.60},
         {'name':"Caramac Bar", 'code':"A02", 'quantity':5, 'price':0.60},
         {'name':"Dairy Milk", 'code':"A03", 'quantity':1, 'price':0.65},
         {'name':"Freddo", 'code':"A04", 'quantity':1, 'price':0.25}];
```

# Rules
<pre style="white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;">
1. If the money given to the machine is less than the item cost return "<font color="#A1A85E">Not enough money!</font>"

2. If the quantity is 0 for an item return "<font color="#A1A85E">Item Name: Out of stock!</font>". Where "Item Name" is the name of the item selected.

3. If an item is correctly selected return "<font color="#A1A85E">Vending Item Name with 9.40 change.</font>". Where "Item Name" is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "<font color="#A1A85E">Vending Item Name</font>". Where "Item Name" is the name of the item.

5. If an invalid item is selected return "<font color="#A1A85E">Invalid selection! : Money in vending machine = 11.20</font>". Where 11.20 is the machines money float.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

8. Change is always given to 2 decimal places ie 7.00
</pre>

Good luck and Enjoy

# Kata Series
If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58663693b359c4a6560001d6" target="_blank">Maze Runner</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58693bbfd7da144164000d05" target="_blank">Scooby Doo Puzzle</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/7KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134" target="_blank">Driving License</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/586c0909c1923fdb89002031" target="_blank">Connect 4</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f" target="_blank">Vending Machine</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027" target="_blank">Snakes and Ladders</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58a848258a6909dd35000003" target="_blank">Mastermind</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051" target="_blank">Guess Who?</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029" target="_blank">Am I safe to drive?</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029" target="_blank">Mexican Wave</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e" target="_blank">Pigs in a Pen</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/590300eb378a9282ba000095" target="_blank">Hungry Hippos</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/5904be220881cb68be00007d" target="_blank">Plenty of Fish in the Pond</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/590adadea658017d90000039" target="_blank">Fruit Machine</a></span>

<span style="display: flex !important;"><img style="margin:0px;" src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" alt="Rank"/>&nbsp;<a href="https://www.codewars.com/kata/591eab1d192fe0435e000014" target="_blank">Car Park Escape</a></span>
