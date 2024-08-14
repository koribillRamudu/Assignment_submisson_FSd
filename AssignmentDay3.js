// history of java script
// javascript was created in the 1995 by Brendan Eich while he was working at netscape communications corporation. 
// it was initially designed to add interactivity to web pages in the netspcape navigator web browser.
// the first name of javascript is mocha then there renamed as a livescript, later they changed to javascript become at that time java was become popularity.
// java script has become important language in web development.there are lot frameworks and techologies such as : node.js,jscript.

// Data Types in javascript
// there are two types: primitive,object
// in primitive there are different types: number,string,boolean,null,undefined,symbol
// in object the data type which are not in primitive types then it is an object
// in number the maximum safe value is 90071254740991
// if the number big then that we have to use Bigint
// when we have a decimal points it is called as a float represtion in java script any numbers are numbers even it is float values also.
// to check that type we use typeof
let n=10.0
console.log(typeof n)
let a=5/0
console.log(a)

// so , here n is a number
// if we are using a big number if unable to count can use _
let m=100_000_0
console.log(m)
// in java script we have infinity,-infinity
// if wanted to declare a big number does not wanted to loose the value can use bigint
let q=10101010110101010101010101010n
console.log(q)

// String oerations:
// string is used to store the text which is given. to concateced the strings we can use + opertor
let firstName="ramudu"
let lastName="koribilli"
let Name =firstName +lastName
console.log(Name)

// in string to get the element in the new line we can use \n and to get space we can use \t
let b="ramudu \n koribilli"
let c="ramudu\tkoribilli"
console.log(b)
console.log(c)
// to delete any element we can use \b to remove the element in a string

let d="ramudu\bu"
console.log(d)

// boolean will have two output is true or false

let r=5>1
console.log(r)

// null is a object which does not store any value
// NaN is not a number if perform a operation on number and string then result will be NaN

let w=5/"r"
console.log(w)

// Type conversion and corcion:
// type conversion is nothing but converting a data in a different types

// converting number to string
let num=6
console.log(num)
console.log(String(num))

// coercion is an auto conversion
let num1=7
console.log(num1-"2")
// parseInt which help to convert the numbers in a string to number but the numbers needed to be at first
let num2="1947 ramudu"
console.log(parseInt(num2))


// Arthmetic operators:
// arthmetic operators are +,-,*,/,%,++,-- which gives you a reminder
let num3=5
let num4=6
console.log(num3+num4)
console.log(num3-num4)
console.log(num3*num4)

// post increment it will first assign the value and then it increment
// pre increment it will first increment and then it assign


// Relational operators:
// Relational operators is used to compare the two values in this we will get true or false
// the operator are : <,>,<=,>=,==,!=,===,!==
let word="java"
let word1="javascript"
let result=word >word1
console.log(result)


// logical operators: 
// logical operators there are &&,||,!
// in and operator the both the values must be true to get true else it return false

num5=6,numb6=7,num8=8
let res= num5 <numb6 && numb6<num8
console.log(res) 


// Ternary operator: 
// Ternary operator is ?: it is same like a if and else condition

let number1=8
let re= number1%2===0 ? "even":"odd"
console.log(re)


//Template literal:
// Template literal in this we have a symbol called backtick ``
let numb=6
let numb1=7
let result1=numb+numb1
console.log(`the addtion of ${numb} and ${numb1} is ${result}`)
