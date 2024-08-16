// Write a loop that makes seven calls to console.log to output the following triangle

for (let i = 1; i <= 7; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "# ";
    }
    console.log(str);
}

/*Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for
numbers divisible by 5 (and not 3), print "Buzz" instead.*/

for(let r=1;r<=100;r++){
    if(r %3==0){
        console.log("Fizz")
    }
    else if(r%5==0){
        console.log("Buzz")
    }
    else{
        console.log(r)
    }
}

/*When you have that working, modify your program to print "FizzBuzz" for numbers that
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by
only one of those).*/

for(let a=1;a<=100;a++){
    if(a %3==0 && a%5==0){
        console.log("FizzBuzz")
    }
    else if(a %3==0){
        console.log("Fizz")
    }
    else if(a%5==0){
        console.log("Buzz")
    }
    else {
        console.log(a)
    }
}
