function getEven(L,R)
{
    if(L>R) return
    if(L%2===0)
    {
        console.log(L + " ")
        getEven(L+2,R)
    }
    else if(L%2==1)
    {
        getEven(L+1,R)
    }
}
getEven(9,12)