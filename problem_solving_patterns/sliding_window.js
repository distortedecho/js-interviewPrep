//given num, find the max sum amongst subsets of size num in the array

function sliding(arr, num)
{
    if(arr.length<num) return 0
    let max_sum = 0
    let temp_sum = 0
    for(let i = 0; i<num; i++)
    {
        max_sum += arr[i]
    }
    temp_sum = max_sum
    for(let i=num;i<arr.length;i++)
    {
        temp_sum = temp_sum - arr[i-num] + arr[i]
        max_sum = Math.max(temp_sum,max_sum)
    }
    return max_sum
}

console.log(sliding([2,6,9,2,1,8,5,6,3],3))