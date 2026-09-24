# Day 010 - Pete, the baker

**Source:** [Codewars - Pete, the baker](https://www.codewars.com/kata/525c65e51bf619685c000059)

## Problem

Write a function cakes(), which takes two parameters:

- the recipe ingredients (a dictionary/object)
- the available ingredients (also a dictionary/object)

and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

## Examples

| Input       | Output      |
|-------------|-------------|
| {flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200} | 2 |
| {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000} | 0 |