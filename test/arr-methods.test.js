const assert = require('assert');
const squares = require('squares');

describe('array methods', () => {

    it('square and check', () => {
        let arr = [1, 3, 5, 7];
        
        const result = squares(arr);

        assert.deepEqual(result, [25, 49]);
    });
});