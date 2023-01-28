function arrayProduct(arr){
    if(arr.length == 1) return arr[0]
    return answer = arr[0]*arrayProduct((arr.splice(1))) 
}

console.log(arrayProduct([-1,-2,3,-6]))