const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
        this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);		
	}

	pop() {
		if (!this.isEmpty()) {
            let unique = this.detachRoot();
            this.restoreRootFromLastInsertedNode(unique);
            this.shiftNodeDown(this.root);
            return unique.data;
        }
	}

	detachRoot() {
		let {root} = this;
        if (this.parentNodes.includes(root)) this.parentNodes.shift();
        this.root = null;
        return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (!this.isEmpty()) {
            let lastInseredNode = this.parentNodes.pop();
            if (!lastInseredNode.parent) return this.root = lastInseredNode;
            if (lastInseredNode.parent.right === lastInseredNode && lastInseredNode.parent !== detached) this.parentNodes.unshift(lastInseredNode.parent);
            lastInseredNode.remove();
            if (detached !== lastInseredNode.parent) {
                if (detached.left) lastInseredNode.appendChild(detached.left);
                if (detached.right) lastInseredNode.appendChild(detached.right);
            }
            if (!lastInseredNode.right) this.parentNodes.unshift(lastInseredNode);
            this.root = lastInseredNode;
        }
	}

	size() {
		function calcSize(node) {
            return node === null ? 0 : 1 + calcSize(node.left) + calcSize(node.right);
        }
        return calcSize(this.root);
	}

	isEmpty() {
		return this.root === null && this.parentNodes.length === 0;
	}

	clear() {
		this.root = null;
        this.parentNodes = [];
	}

	insertNode(node) {
		if (this.isEmpty()) {
            this.root = node;
            this.parentNodes.push(node);
        } else {
            this.parentNodes.push(node);
            this.parentNodes[0].appendChild(node);
        }
        if (this.parentNodes[0].left && this.parentNodes[0].right) this.parentNodes.shift();
	}

	shiftNodeUp(node) {
		if (node.parent) {
            if (node.priority > node.parent.priority) {
                let Index = this.parentNodes.indexOf(node.parent);
                let needIndex = this.parentNodes.indexOf(node);
                if (needIndex !== -1) {
                    (Index !== -1) ?
                        [this.parentNodes[needIndex], this.parentNodes[Index]] = [this.parentNodes[Index], this.parentNodes[needIndex]]
                        : this.parentNodes[needIndex] = node.parent;
                }
                node.swapWithParent();
                this.shiftNodeUp(node);
            }
        } else this.root = node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
