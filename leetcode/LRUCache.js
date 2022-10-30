/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const value = this.map.get(key);
  if (typeof value === 'undefined') return -1;
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.map.delete(key); //returns false if not found
  this.map.set(key, value);
  let keys = this.map.keys();
  if (this.map.size > this.capacity) this.map.delete(keys.next().value);
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
