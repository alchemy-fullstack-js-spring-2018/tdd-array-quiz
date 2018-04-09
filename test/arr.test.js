const assert = require('assert');
const arrFilter = require('../lib/arrFilter');

describe('it test array function', () => {

    it('tests that function squares and filters arr', () => {
        const input = [1, 4, 5, 7];
        const result = arrFilter(input);
        assert.deepEqual(result, [25, 49]);
    });

    it('test edge case of empty arr', () => {
        const input = [];
        const result = arrFilter(input);
        assert.deepEqual(result, []);
    });

    it('test arr where nothing becomes larger than 20', () => {
        const input = [1, 2];
        const result = arrFilter(input);
        assert.deepEqual(result, []);
    });

    it('works with large numbers', () => {
        const input = [100, 200];
        const result = arrFilter(input);
        assert.deepEqual(result, [10000, 40000]);
    });

});