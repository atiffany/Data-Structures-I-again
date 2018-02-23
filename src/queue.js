/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
const Stack = require('./stack');

class Queue {
  constructor() {
    this.storage1 = new Stack();
    this.storage2 = new Stack();
  }

  get size() {
    return this.storage1 + this.storage2;
  }

  enqueue(item) {
    this.storage1.push(item);
  }

  dequeue() {
    if (this.storage2.size < 1) {
      while (this.storage1.size > 0) {
        this.storage2.push(this.storage1.pop());
      }
    }
    return this.size() ? this.storage2.pop() : null;
  }
}

module.exports = Queue;
