function RemZeroes(arr){
    let NewArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            NewArr.push(arr[i]);
        }
    }
    return NewArr;
}
console.log(RemZeroes([1,0,1,3,4,0,1,4,0]));