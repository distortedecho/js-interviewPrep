//find a pair which sums to 0 in a given sorted array

function sumZero(arr){
    let left = 0
    let right = arr.length - 1
    while(left<right)
    {
        let sum = arr[left] + arr[right]
        if(sum === 0) return [arr[left],arr[right]]
        else if(sum>0) right--
        else left++
    }
    return "no sums"
}

let arr = [-2,-1,1,2,4]
console.log(sumZero(arr))