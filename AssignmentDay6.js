function countBs(n){
    count=0
    for(let i of n){
        if(i=="B"){
            count=count+1
        }
    }
    return count
}

// console.log(countBs("laBBbq"))

function CountofChar(n,c){
    count=0
    for(let i of n){
        if(i==c){
            count=count+1
        }
    }
    return count
}


console.log(CountofChar("alliswell","l"))