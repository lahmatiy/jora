const assert = require('assert');
const query = require('./helpers/lib');
const data = require('./helpers/fixture');

describe('size()', () => {
    it('basic', () => {
        assert.equal(
            query('size()')(data),
            data.length
        );
    });

    it('in subquery', () => {
        assert.deepEqual(
            query('.(deps.size())')(data).sort(),
            [0, 1, 2]
        );
    });

    it('should return own keys count for plain objects', () => {
        assert.equal(
            query('size()')({}),
            0
        );
        assert.equal(
            query('size()')({ foo: 1, bar: 2 }),
            2
        );
        assert.equal(
            query('size()')({ foo: 1, bar: 2, __proto__: { baz: 3 } }),
            2
        );
    });
});
