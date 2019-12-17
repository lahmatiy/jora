const assert = require('assert');
const query = require('../src');

describe('join()', () => {
    it('join an array with no separator', () => {
        assert.deepEqual(
            query('join()')([1, 2, 3]),
            '1,2,3'
        );
    });

    it('join an array with separator', () => {
        assert.deepEqual(
            query('join(", ")')([1, 2, 3]),
            '1, 2, 3'
        );
    });

    it('join non-array', () => {
        assert.deepEqual(
            query('join(",")')(123),
            '123'
        );
    });
});
