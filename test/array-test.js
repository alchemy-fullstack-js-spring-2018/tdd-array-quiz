const assert = require('assert');
const arrCheck = require('../lib/array');

describe ('ARRAY TEST', () => {

    it('Returns results of square over 20', () => {
        const arr = [1, 4, 5, 7];
        const actual = arrCheck(arr);
        assert.deepEqual(actual, [25, 49]);
    });

});