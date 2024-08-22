function reduceProgram(a){
    // let b=[]
    // for(let i=0;i<a.length;i++){
    //     for(let j=0;j<a[i].length;j++){
    //         b.push(a[i][j])
    //     }
    // }
    // return b
    let b = a.reduce((acc, curr) => acc.concat(curr), []);
    return b

}

// console.log(reduceProgram([[1,2,3,4],[5],[6,7,8]]))

function every(arr,test){
    let flag=true;
    if(arr.length==0){
        return true
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]<test){
                flag=false;
                break
            }
        }
    }
    return flag;
}

console.log(every([],10))


function every(array, test) {
      return !array.some(element => !test(element));
}

console.log(every([1,3,5],10))
