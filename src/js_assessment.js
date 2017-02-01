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


const MinHeap = function () {
  this.heap = [];
};

MinHeap.prototype.getMin = function () {
  return this.heap[0];
};

MinHeap.prototype.add = function (value) {
  let childIdx = this.heap.length;
  this.heap.push(value);
  let parentIdx = MinHeap.getParentIdx(childIdx);
  let parentVal = this.heap[parentIdx];

  while (value < parentVal) {
    if (childIdx === 0) { break; }

    this._swap(childIdx, parentIdx);

    childIdx = parentIdx;
    parentIdx = MinHeap.getParentIdx(childIdx);
    parentVal = this.heap[parentIdx];
  }
};

MinHeap.getParentIdx = function (childIdx) {
  return Math.floor(childIdx / 2);
};

MinHeap.prototype.getParent = function(idx) {
  if (idx === 0) { return null; }

  return this.heap[Math.floor(idx / 2)];
};

MinHeap.prototype._swap = function (childIdx, parentIdx) {
  const childVal = this.heap[childIdx];

  this.heap[childIdx] = this.heap[parentIdx];
  this.heap[parentIdx] = childVal;
};
