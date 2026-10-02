# Day 016 - First non-repeating character

**Source:** [Codewars - First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

## Problem

Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input `"stress"`, the function should return `'t'`, since the letter *t* only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase characters are considered the **same character**, but the function should return the correct case **for the initial character**.  For example, the input `"sTreSS"` should return `"T"`.

~~~if-not:rust,ocaml
If a string contains *only repeating characters*, return an empty string (`""`);
~~~
~~~if:rust,ocaml
If a string contains *only repeating characters*, return `None`.
~~~

Note: despite its name in some languages, your function should handle any Unicode codepoint:

```java
"@#@@*"    --> "#"
"かか何"   --> "何"
"🐐🦊🐐" --> "🦊"
```

