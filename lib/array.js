module.exports = {

    square(arr, callback) {
        const array = [];
        for(let i = 0; i < arr.length; i++) {
            const result = callback(arr[i]);
            array.push(result);
        }
    }

};