const assert = require('assert');
const arrayMethods = require('../lib/tddArrayMethods');

describe('arrayMethods', () =>{
    it('return squre of input', ()=> {
        const newArray = [1,4,5,7];
        const squareArray = tddArrayMethods.map(newArray, x => x ^2);
        assert.deepEqual(squareArray, [25,49]);
    });