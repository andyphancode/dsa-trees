/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let ourStack = [this.root];

    let sum = 0;

    while (ourStack.length) {

      let current = ourStack.pop()

      if (current) {
        sum += current.val 
        if (current.children) {
          for (let child of current.children) {
            ourStack.push(child);
          }
        }
      }

    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let ourStack = [this.root];

    let sum = 0;

    while (ourStack.length) {

      let current = ourStack.pop()

      if (current) {
        if(current.val % 2 === 0) {sum += 1} 
        if (current.children) {
          for (let child of current.children) {
            ourStack.push(child);
          }
        }
      }

    }

    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let ourStack = [this.root];

    let sum = 0;

    while (ourStack.length) {

      let current = ourStack.pop()

      if (current) {
        if(current.val > lowerBound) {sum += 1} 
        if (current.children) {
          for (let child of current.children) {
            ourStack.push(child);
          }
        }
      }

    }

    return sum;
  }
}

module.exports = { Tree, TreeNode };
