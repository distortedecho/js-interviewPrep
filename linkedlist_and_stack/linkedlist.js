class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        var current = this.head
        var newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return this
    }
    shift(){
        if(!this.head) return undefined
        this.head = this.head.next
        this.length--
        if(this.length ===0)
        {
            this.tail = null
        }
        return this //return this.head
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else
        {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

var list = new SinglyLinkedList()
console.log(list.push("Hi"))
console.log(list.push("LinkedList"))
console.log(list.push("and LinkedList2"))
console.log(list.unshift("Hey"))

// console.log(list.shift())
// console.log(list.shift())

// console.log(list.pop())
// console.log(list.pop())