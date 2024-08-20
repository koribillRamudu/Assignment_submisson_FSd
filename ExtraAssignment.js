function minElement(a,b){
    let n=a<b ? a:b
    return n
}


function isEven(n){
    if(n<0){
        n=Math.abs(n)
        // console.log(n)
    }
    if(n==0){
        return true
    }
    else if(n==1){
        return false
    }
    else{
        return isEven(n-2)
    }
}

console.log(isEven(-22))