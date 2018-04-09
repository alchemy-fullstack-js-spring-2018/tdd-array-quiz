const assert = require('assert');
const squared = require('../lib/squared');

describe('test', () => {
    it('squared', () => {
        const array = [1, 4, 5, 7];

        const squaredNums = squared(array, x => x * x);
        assert.equal(squaredNums, [1, 16, 25, 49]);
    });

});