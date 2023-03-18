/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
  this.history = [homepage]; // initialize history with the homepage
  this.current = 0; // initialize current position to the homepage
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  // clear forward history
  this.history.splice(this.current + 1, this.history.length - this.current - 1);
  this.history.push(url); // add the new url to history
  this.current = this.history.length - 1; // update current position
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  const newPos = Math.max(0, this.current - steps); // calculate new position
  this.current = newPos; // update current position
  return this.history[newPos]; // return current url
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const newPos = Math.min(this.history.length - 1, this.current + steps); // calculate new position
  this.current = newPos; // update current position
  return this.history[newPos]; // return current url
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
