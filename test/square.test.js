const assert = require('assert');
const square = require('../lib/square');

describe('every', () => {

    it('returns an array of the squares larger than 25', () => {
        const arr = [1, 4, 5, 7];
        const name = square(arr);
        assert.deepEqual(name, [25, 49]);
    });

});