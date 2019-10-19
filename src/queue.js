const MaxHeap = require('./max-heap.js');
class PriorityQueue {
	constructor(maxSize) {
        if (arguments.length == 1){
        	this.maxSize = maxSize
        } else {
        	this.maxSize = 30;
        }
        this.heap = new MaxHeap();
	}

	push(data, priority) {
        if (this.heap.size() >= this.maxSize) {
    		throw "Queue overflow";
        }
        this.heap.push(data, priority);
	}

	shift() {

	}

	size() {
        function calcSize(node) {
            return node === null ? 0 : 1 + calcSize(node.left) + calcSize(node.right);
        }
        return calcSize(this.root);
	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
