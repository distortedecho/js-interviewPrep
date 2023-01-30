class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }
    insert(val){
        var newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this
        }
        var current = this.root
        while(true)
        {
            if(val===current.val) return undefined
            if(val<current.val)
            {
                if(!current.left){
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(val){
        if(!this.root) return undefined
       var found = false
       var current = this.root
        while(current && !found){
            if(val<current.val){
                current = current.left
            }
            else if(val>current.val){
                current = current.right
            }
            else{
                found = true
            }
        }
        return current
    }
}
let bst = new Bst();
console.log(bst.insert(3))
console.log(bst.insert(2))
console.log(bst.insert(5))
console.log(bst.insert(1))
console.log(bst.find(2))
