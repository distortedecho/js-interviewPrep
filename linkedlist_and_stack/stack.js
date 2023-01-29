class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.start = null
        this.end = null
        this.size = 0
    }
    push(val){
        var nodeValue = new Node(val)
        if(!this.start)
        {
            this.start = nodeValue
            this.end = nodeValue
        }
        else
        {
            nodeValue.next = this.start
            this.start = nodeValue
        }
        this.size++
        return this
    }
    pop(){
        if(!this.start) return undefined
        if(this.start === this.end){
            this.end = null
        }
        this.start = this.start.next
        this.size--
        return this
    }
}
var stack = new Stack()
stack.push(5)
stack.push(6)
console.log(stack.pop())