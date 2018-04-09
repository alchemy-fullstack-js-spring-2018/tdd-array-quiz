const assert = require('assert');
const highSquares = require('../lib/high-squares');

describe('Array squares over 20', () => {

    it('takes array, returns array of squares > 20', () => {
        const array = [1, 4, 5, 7];
        const result = highSquares(array);
        assert.deepEqual(result, [25, 49]);
    });
});