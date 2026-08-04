// Problem: LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
//   - LRUCache(int capacity) initializes the LRU cache with positive size capacity.
//   - int get(int key) returns the value of the key if the key exists, otherwise returns -1.
//   - void put(int key, int value) update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Example 1:
//   Input:
//     ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//     [[2], [1,1], [2,2], [1], [3,3], [2], [4,4], [1], [3], [4]]
//   Output:
//     [null, null, null, 1, null, -1, null, -1, 3, 4]
//   Explanation:
//     LRUCache lRUCache = new LRUCache(2);
//     lRUCache.put(1, 1); // cache is {1=1}
//     lRUCache.put(2, 2); // cache is {1=1, 2=2}
//     lRUCache.get(1);    // returns 1
//     lRUCache.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
//     lRUCache.get(2);    // returns -1 (not found)
//     lRUCache.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
//     lRUCache.get(1);    // returns -1 (not found)
//     lRUCache.get(3);    // returns 3
//     lRUCache.get(4);    // returns 4
//
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {

    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    addToHead(node){
        node.prev = null;
        node.next = this.head;

        if(this.head){
            this.head.prev = node;
        } else {
            this.tail = node;
        }

        this.head = node;
    }

    removeNode(node){
        if(node.prev){
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if(node.next){
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        node.prev = node.next = null;
    }

    moveToHead(node){
        this.removeNode(node);
        this.addToHead(node);
    }

    removeTail(){
        if(!this.tail) return null;

        let node = this.tail;
        this.removeNode(node);
        return node;
    }

    get(key){
        if(!this.map.has(key)) return -1;

        let node = this.map.get(key);
        this.moveToHead(node);

        return node.value;
    }

    put(key,value){

        if(this.map.has(key)){
            let node = this.map.get(key);
            node.value = value;
            this.moveToHead(node);
            return;
        }

        let node = new Node(key,value);
        this.map.set(key,node);
        this.addToHead(node);

        if(this.map.size > this.capacity){
            let removed = this.removeTail();
            this.map.delete(removed.key);
        }
    }
}
