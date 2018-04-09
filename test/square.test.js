const assert = require('assert');
const square = require('../lib/square');

describe('every', () => {

    it('returns an array of the squares larger than 20', () => {
        const arr = [1, 4, 5, 7];
        const squared = square(arr);
        assert.deepEqual(squared, [25, 49]);
    });
});