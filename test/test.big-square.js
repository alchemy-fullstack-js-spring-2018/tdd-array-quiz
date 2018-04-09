const bigSquare = require('../lib/big-square.js');
const assert = require('assert');


const testArray1 = [1, 4, 5, 7];
const expected1 = [25, 49];

const testArray2 = [13, 42, 1, 0, 5, 25];
const expected2 = [169, 1764, 25, 625];


describe('bitmap header', () => {

    beforeEach(() => {

    });

    it('returns squares greater than 20, test 1', () => {

        const result = bigSquare(testArray1);

        assert.deepEqual(result, expected1);
        
    });

    it('returns squares greater than 20, test 2', () => {

        const result = bigSquare(testArray2);

        assert.deepEqual(result, expected2);
        
    });

});