# Day 008 - Good vs Evil

**Source:** [Codewars - Good vs Evil](https://www.codewars.com/kata/52761ee4cffbc69732000738)

## Problem

Given two strings containing the number of fighters on the Good and Evil sides, calculate each side's total battle power.

Good:
- Hobbits = 1
- Men = 2
- Elves = 3
- Dwarves = 3
- Eagles = 4
- Wizards = 10

Evil:
- Orcs = 1
- Men = 2
- Wargs = 2
- Goblins = 2
- Uruk Hai = 3
- Trolls = 5
- Wizards = 10

## Examples

| Input       | Output      |
|-------------|-------------|
| "1 2 3 4 5 6", "1 2 3 4 5 6 7" | "Battle Result: Evil eradicates all trace of Good" |
| "0 0 0 0 0 1", "0 0 0 0 0 0 1" | "Battle Result: No victor on this battle field" |
| "0 0 0 0 0 10", "0 1 1 1 1 0 0" | "Battle Result: Good triumphs over Evil" |