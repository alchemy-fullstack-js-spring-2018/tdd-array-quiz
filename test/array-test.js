const assert = require('assert');
const quiz = require('../lib/array');

describe('squared array', () => {

    it('square', () => {
        const arr = [1, 4, 5, 7];
        const newArr = quiz.map(arr, x => x * x).filter(arr, x => x > 20);
        assert.equal(newArr, [1, 16, 25, 54]);
    });


});