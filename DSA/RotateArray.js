function Reverse(arr,l,r){
    let temp=0;
    while(l<r){
        temp=arr[l];
        arr[l]=arr[r];
        arr[r]=temp;
        l++;
        r--;
    }
}
function Rotate(arr,k){

    k=k%arr.length;
    Reverse(arr,0,arr.length-1);
    Reverse(arr,0,k-1);
    Reverse(arr,k,arr.length-1)
    return arr;
}
console.log(Rotate([1,2,3,4,5],2))