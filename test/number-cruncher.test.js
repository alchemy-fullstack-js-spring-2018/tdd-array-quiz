const assert = require('assert');
const numberCruncher = require('../lib/number-cruncher');

describe('number cruncher', () => {
    it('takes an array of numbers and returns a new array that contains the square of the input numbers filtered to only contain those squares greater than 20', () => {
        const returned = numberCruncher([1, 4, 5, 7]);
        assert.deepEqual([25, 49], returned);
    });
});