const assert = require('assert');

const addOne = myArray => {
  const newMyArray = []
  for (let i = 0; i < myArray.length; i += 1) {
    newMyArray.push(myArray[i] + 1);
  }
  return newMyArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);