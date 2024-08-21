// Write a range function that takes two arguments, start and end, and returns an array containing all the
// numbers from start up to and including end.

function Range_fun(start,end){
    let a=[];
    for(let i=start;i<=end;i++){
        a.push(i)
    }
    return a
}
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the
// example program and see whether it does indeed return 55.
function SumOfRange(b){
    let sum=0
    for(let i=0;i<b.length;i++){
        sum=sum+b[i]
        // console.log(sum)
    }
    return sum
}
r=Range_fun(1,10)
console.log(SumOfRange(r))


// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For
// this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an
// array as its argument and produce a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by
// reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr){
    let rev_arr=[]
    for(let i=arr.length-1;i>=0;i--){
        rev_arr.push(arr[i])
    }
    return rev_arr
}
console.log(reverseArray(["A","B","C"]))


function reverseArrayInPlace(arr){
    for(let i=arr.length-1;i>=0;i--){
        let temp=arr[i]
        arr[i]=arr[len-1-i]
        arr[len-1-i]=temp
    }
}


function arrayToList(arr){
    let list=null
    for(let i=arr.length-1;i>=0;i--){
        list ={values:arr[i],rest:list}
        }
    return list
}

console.log(arrayToList([1,2,3]))


function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}
