function binary_search(arr,num)
{
    let left = 0
    let right = arr.length -1
    while(left<=right)
    {
        let mid = Math.floor((left+right)/2)
        if(arr[mid]>num){
            right = mid
        }
        else if(arr[mid]<num){
            left = mid
        }
        else
        {
            return mid
        } 
    }
    return -1
}
console.log(binary_search([2,6,9,2,1,8,5,6,3],1))