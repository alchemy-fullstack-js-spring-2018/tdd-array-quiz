const assert = require('assert');
const square = require('../lib/square');

describe('array test', () => {
    const arr = [1, 4, 5, 7];
    const squared = x => x * x; 

    it('squares array and returns array with values greater then 20', () => {
        const newArray = square(arr, squared);
        assert.deepEqual(newArray, [25, 49]);

    });

}); 