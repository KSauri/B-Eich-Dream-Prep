//Write caesar_cipher(string, shift). You may assume all
//lowercase letters. You may wish to use a helper method that
//decodes one word at a time.

//Hint: "a".codePointAt(0) === 97
//and String.fromCharCode(97) === "a";


/*
Write Function.prototype.myCurry(numArgs)
*/


/*
Write Array.prototype.myFlatten(n) which takes an optional argument determining
the depth of nesting the function will flatten.
*/


/*
Write Function.prototype.myCall(ctx, ...args)
*/


/*
Write Array.prototype.bSearch(target)
*/


/*
Write Array.prototype.mergeSort(comparator)
*/

/*
Write transpose(arr);
*/


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
