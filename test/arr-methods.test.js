const assert = require('assert');
const squares = require('../lib/arr-methods');

describe('array methods', () => {

    it('square and check', () => {
        let arr = [1, 3, 5, 7];
        
        const result = squares(arr);

        assert.deepEqual(result, [25, 49]);
    });

    it('second square and check', () => {
        let arr = [1, 1, 1, 1, 1, 22];

        const result = squares(arr);
       
        assert.deepEqual(result, [484]);
    });
});