const assert = require('assert');
const array = require('../lib/array');

describe('testing the array', () =>{

    it('test to make sure arrays are iterating', () =>{

        const testArray = [1, 4, 5, 7];
        const newArray = array.map(testArray, x => (x * x));
        assert.deepEqual(newArray, [25, 49]);

    })

   

})