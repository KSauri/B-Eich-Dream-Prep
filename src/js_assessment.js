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
