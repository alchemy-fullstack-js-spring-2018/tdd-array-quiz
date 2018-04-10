const assert = require('assert');
const app = require('../lib/app');

const testArray = [1, 4, 5, 7];

describe('Testing squaresTest function', () => {
    it('Test 1', () => {
        const results = app.squaresTest(testArray);

        assert.deepEqual(results, [25, 49]);
    });    
});