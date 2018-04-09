const assert = require('assert');
const square = require('../lib/square');

describe('square', () => {
    it('squares array when result is greater than 20', () => {
        const testArray = [1, 4, 5, 7];
        const answersArray = [25, 49];

        const squaredArray = square(testArray);
        assert.deepEqual(squaredArray, answersArray);
    });
});