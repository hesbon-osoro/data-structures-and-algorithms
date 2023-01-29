/**
 * @param {number} capacity
 */
const LFUCache = function (capacity) {
  this.cache = {};
  this.LFUMap = {};
  this.capacity = capacity;
  this.currentSize = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (node) {
    this.remove(node);
    this.cache[key] = this.add(key, node.value, node.useCount + 1);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }
  if (this.cache[key]) {
    this.remove(this.cache[key]);
    this.cache[key] = this.add(key, value, this.cache[key].useCount + 1);
  } else {
    if (this.currentSize === this.capacity) {
      let lfuDLL;
      for (let key in this.LFUMap) {
        // get key for first dll - O(1) since only iterate once
        lfuDLL = this.LFUMap[key];
        break;
      }
      delete this.cache[lfuDLL.head.key];
      this.remove(lfuDLL.head);
    } else {
      this.currentSize++;
    }
    this.cache[key] = this.add(key, value, 1);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LFUCache.prototype.add = function (key, value, useCount) {
  const node = { key, value, useCount, prev: null, next: null };
  const currentDLL = this.LFUMap[node.useCount];
  if (currentDLL) {
    node.prev = currentDLL.tail;
    currentDLL.tail.next = node;
    currentDLL.tail = node;
  } else {
    this.LFUMap[node.useCount] = { head: node, tail: node };
  }
  return node;
};

LFUCache.prototype.remove = function (node) {
  const currentDLL = this.LFUMap[node.useCount];
  if (!node.prev && !node.next) {
    // if only one in list
    currentDLL.head = null;
    currentDLL.tail = null;
    delete this.LFUMap[node.useCount];
  } else if (!node.prev) {
    // if node in front
    currentDLL.head = node.next;
    currentDLL.head.prev = null;
  } else if (!node.next) {
    // if node at back
    currentDLL.tail = node.prev;
    currentDLL.tail.next = null;
  } else {
    // node in between
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
};
