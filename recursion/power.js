//pure recursion
function fact(x,y)
{
    //base case
    if(y===1) return x
    return answer = x*fact(x,y-1);
}
console.log(fact(10,7))

