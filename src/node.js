class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left || !this.right) {
            if (!this.left) {
                this.left = node;
                node.parent = this;
            } else {
                this.right = node;
                node.parent = this;
            }
        }
	}

	removeChild(node) {
		if (node === this.left){
            this.left = null;
            node.parent = null;
        } else if (node === this.right){
            this.right = null;
            node.parent = null;
        } else throw Error;
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
