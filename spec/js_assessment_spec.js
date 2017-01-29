describe("caesar_cipher", () => {
  it("encodes a simple word", () => {
    expect(caesar_cipher("aaa", 11)).toEqual("lll");
  });

  it("wraps around the alphabet", () => {
    expect(caesar_cipher("zzz", 1)).toEqual("aaa");
  });

  it("encodes multiple words", () => {
    expect(caesar_cipher("catz hatz", 2)).toEqual("ecvb jcvb");
  });
});

describe("Function.prototype.myCurry", () => {
  it("collects up arguments until there are numArgs of them", () => {

  });
  it("if there are too few arguments still, it should return itself", () => {

  });
  it("when there are numArgs arguments, it should call the original function", () => {

  });
  it("uses Function.prototype.apply", () => {

  });
});

describe("Function.prototype.myCall", () => {
  beforeEach(() => {
    class Cat {
      constructor (name) {
        this.name = name;
      }

      sayHello () {
        return this.name + " says hello!";
      }

      greetOne (otherCat) {
        return this.name + " says hello to " + otherCat.name;
      }

      greetTwo (otherCat1, otherCat2) {
        return this.name + " says hello to " + otherCat1.name + " and " +
          otherCat2.name;
      }
    }

    sally = new Cat("Sally");
    markov = new Cat("Markov");
    curie = new Cat("Curie");
  });

  it("invokes the function it is called on", () => {
    expect(sally.greetOne.myCall(sally, markov)).toEqual("Sally says hello to Markov");
  });

  it("can take any number of arguments", () => {
    expect(sally.greetTwo.myCall(sally, markov, curie))
      .toEqual("Sally says hello to Markov and Curie");
  });
  it("does not use the 'call' function", () => {

  });
  it("should call the function method style on the context", () => {
    expect(sally.sayHello.myCall(markov)).toEqual("Markov says hello!");
  });
});


describe("Array#bSearch", () => {
  const array =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  it("works with an empty array", () => {
    expect([].bSearch(5)).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].bSearch(1)).toEqual(0);
  });

  it("returns the first duplicate it finds", () => {
    expect([0,1,2,3,3,4,5].bSearch()).toEqual(3);
  });

  it("calls itself recursively", () => {
    spyOn(Array.prototype, "bSearch").and.callThrough();

    array.bSearch(5);

    const count = Array.prototype.bSearch.calls.count();
    expect(count).toBeGreaterThan(2);
    expect(count).toBeLessThan(7);
  });

  it("does not modify original", () =>{
    const dupedArray = [1, 2, 3, 4, 5, 6];
    dupedArray.bSearch(2);
    expect(dupedArray).toEqual(array);
  });
});

describe("Array#mergeSort", () => {
  const array =  [1, 5, 2, 4, 3];

  it("works with an empty array", () => {
    expect([].mergeSort()).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].mergeSort()).toEqual([1]);
  });

  it("sorts numbers", () => {
    expect(array.mergeSort()).toEqual(array.slice(0).sort());
  });

  it("sorts arrays with duplicates", () => {
    expect([5, 4, 3, 3, 2, 1].mergeSort()).toEqual([1, 2, 3, 3, 4, 5]);
  });

  it("uses a comparator function if passed in", () => {
    const reversed = array.mergeSort((x, y) => {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return 1;
      } else {
        return -1;
      }
    });
    expect(reversed).toEqual([5, 4, 3, 2, 1]);
  });

  it("calls itself recursively", () => {
    spyOn(Array.prototype, "mergeSort").and.callThrough();

    array.mergeSort();

    const count = Array.prototype.mergeSort.calls.count();
    expect(count).toBeGreaterThan(4);
    expect(count).toBeLessThan(10);
  });

  it("does not modify original", () =>{
    const dupedArray = [1, 5, 2, 4, 3];
    dupedArray.mergeSort();
    expect(dupedArray).toEqual(array);
  });
});

describe("transpose", () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const small_arr = [
    [1, 2],
    [3, 4]
  ];
  const rect_arr = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const tall_rect_arr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

  it("should transpose a matrix", () => {
    expect(transpose(arr)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should transpose a matrix of a different size", () => {
    expect(transpose(small_arr)).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it("should transpose a rectangular matrix", () => {
    expect(transpose(rect_arr)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should transpose a different rectangular matrix", () => {
    expect(transpose(tall_rect_arr)).toEqual([
      [1, 3, 5],
      [2, 4, 6]
    ]);
  });

  it("should not modify the original", () => {
    transpose(small_arr);
    expect(small_arr).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});



// Heaps are data structures that allow for constant time lookup of minimum
// and maximum, in the case of min heaps and max heaps, respectively.
// In other words, given an array of numbers translated to a min heap, you
// will always be able to find the minimum in constant (O(1)) time.
// As a bonus challenge, we will be implementing a min heap with the ability to
// add elements in log(n) time.
//
// In order to do so, we will need a MinHeap class, and a MinHeap.prototype.add(el)
// instance method that adds elements in log(n) time.
//
// Our implementation of a min heap will be a binary tree data structure.
// The way this works is, the minimum will always be the root node.
// This allows us to find the minimum element in constant time - no
// traversing of the tree is necessary.  We just inspect the root and
// immediately find the minimum.
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
//
// For this problem, you should have a class for MinHeap,
// the ability to find the minimum immediately,
// and the ability to add elements.
//
// You may want a helper method, _swap, which swaps two elements in the tree.
//
// Tests
//
//
//
//
//
//
//
//
//