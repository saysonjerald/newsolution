/* eslint-disable max-classes-per-file */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  // pop() {

  // }

  inverse(value) {
    let currentNode = value;
    let prev = null;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = nextNode;
    }

    this.traverse(prev);
    return this;
  }
}

const list = new LinkedList();
list.push(1).push(2).push(3).push(4);
// list.traverse(list);
// list.inverse(list.head);
list.pop();
// console.log(list);
