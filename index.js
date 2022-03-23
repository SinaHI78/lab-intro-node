class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length++;
    for (let i = 0; i < this.items.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item);
        return;
      }
    }
    this.items.push(item);
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

const list = new SortedList();
