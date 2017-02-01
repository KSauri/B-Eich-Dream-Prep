//Write caesar_cipher(string, shift). You may assume all
//lowercase letters. You may wish to use a helper method that
//decodes one word at a time. Hint: use String.prototype.codePointAt(0)
//e.g. "a".codePointAt(0) === 97
//And String.fromCharCode(code);

function caesarCipher(string, shift) {
  return string.split().map((wrd) => {
    return _caesarCipherWord(wrd, shift);
  }).join(" ");
}

function _caesarCipherWord(word, shift) {
  let encodedWord = "";

  for (let i = 0; i < word.length; i++) {
    let currCharAscii = word[i].codePointAt(0);
    let newCharAscii = ((currCharAscii - 97 + shift) % 26) + 97;
    let newChar = word[i] === ' '  ? ' '  : String.fromCharCode(newCharAscii);
    encodedWord += newChar;
  }

  return encodedWord;
}

/*
Write Function.prototype.myCurry(numArgs)
*/

Function.prototype.myCurry = function (numArgs) {
  let argBalls = [];
  let fcn = this;
  return function _myCurry (el) {
    argBalls.push(el);
    if (argBalls.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...argBalls);
    }
  };
};

/*
Write Array.prototype.myFlatten(n) which takes an optional argument determining
the depth of nesting the function will flatten.
*/

Array.prototype.myFlatten = function (n) {
  let flattened = [];

  if (n === 0) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      flattened = flattened.concat(this[i].myFlatten(n - 1));
    } else {
      flattened.push(this[i]);
    }
  }

  return flattened;
};

/*
Write Function.prototype.myCall(ctx, ...args)
*/

Function.prototype.myCall = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};

/*
Write Array.prototype.bSearch(target)
*/

Array.prototype.bSearch = function(target) {
  if (this.length < 1) {
    return -1;
  }

  const middle = Math.floor(this.length / 2);
  const left = this.slice(0, middle);
  const right = this.slice(middle + 1);

  const middleEl = this[middle];

  if (middleEl === target) {
    return middle;
  }
  else if (middleEl < target) {
    return left.bSearch(target);
  }
  else {
    searchRes = right.bSearch(target);
    return searchRes === -1 ? -1 : middle + 1 + searchRes;
  }
};

/*
Write Array.prototype.mergeSort(comparator)
*/

const spaceship = function (x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

Array.prototype.mergeSort = function (comparator) {
  if (this.length < 2) { return this; }

  comparator = comparator || spaceship;

  const half = Math.floor(this.length / 2);

  const left = this.slice(0, half).mergeSort(comparator);
  const right = this.slice(half).mergeSort(comparator);

  let merged = () => {
    let mergedArr = [];
    let compareVal;
    while (left.length > 0 && right.length > 0) {
      compareVal = comparator(left[0], right[0]);
      if (compareVal === -1) { mergedArr.push(left.shift()); }
      else { mergedArr.push(right.shift()); }
    }
    return mergedArr.concat(left).concat(right);
  };
  return merged();
};

/*
Write transpose(arr);
*/

const transpose = function (arr) {
  let transposedArr = [];
  let currRow;

  for (var col = 0; col < arr[0].length; col++) {
    transposedRow = [];
    for (var row = 0; row < arr.length; row++) {
      transposedRow.push(arr[row][col]);
    }
    transposedArr.push(transposedRow);
  }
  return transposedArr;
};


// Heaps are data structures that allow for constant time lookup of minimum
// and maximum, in the case of min heaps and max heaps, respectively.
// In other words, given an array of numbers translated to a min heap, you
// will always be able to find the minimum in constant (O(1)) time.
// As a bonus challenge, we will be implementing a min heap with the ability to
// add elements in log(n) time.
//
// In order to do so, we will need a MinHeap class, and a MinHeap.prototype.add(val)
// instance method that adds elements in log(n) time.
//
// The only rule for a minimum heap is that no node has a parent
// that is larger than it - tho parents can be the same as children (just not larger).
//
// The hard part will be adding elements. Min heaps are binary trees that
// minimize depth - this means that each generation is filled from left
// to right before a new generation is started. An example will make this more
// clear:
//
//                      3
//                    /   \
//                   5      3
//                 /  \    /
//                7    9  6
//
// This implementation is correct - we would not add a child to 7 before 3
// because the second generation is not yet full (from left to right).
//
// The way we add an element is, you find the NEXT place an element should be added
// (in our example, to the right of 6), and place the new element there.
//
// And then swap the element with its parents until it is either greater than or
// equal to its parent.
//
// So, if we were to add '1' to this example, it would swap with its first parent
// (3), and then again with its new parent (3).
//
// However, if we were to add a '5', no swapping would occur.

// An convenient implementation of a min-heap is with an array that stores allow
// of the elements ordered by their position in the tree. In this ordering, the
// first element (at index 0) is the root minimum element. For the above tree,
// the array representation would be so:
//      [1, 5, 3, 7, 8, 6]
//  idx: 0  1  2  3  4  5

// The ordering starts at the top, then traverses each row of the tree from left to
// right (like a BFS). As you can see, to add a new element, we simply need to
// push the element onto the array.

// Additionally, the parent of an element at a given index i is always the element
// at floor(i / 2). For example, the parent of 7 (index 3) is 5 (index 3 / 2 = 1).
// The exception is the element at index 0, which has no parent.
//
// For this problem, you should have a class for MinHeap,
// the ability to find the minimum immediately,
// and the ability to add elements.
//
// You will need a helper method, _swap, which swaps two elements in the tree.
//

const MinHeap = function () {
  this.heap = [];
};

MinHeap.prototype.getMin = function () {

};

//#add must push in the given node value and then perform the
//necessary swapping until the value of that node's parent
//is less than that node's value (or the node is at the front
//of our heap)
MinHeap.prototype.add = function (value) {

};

//The index of the child's parent will always be the floor of
//half its index.
MinHeap.getParentIdx = function (childIdx) {
  return Math.floor(childIdx / 2);
};

MinHeap.prototype._swap = function (childIdx, parentIdx) {

};
