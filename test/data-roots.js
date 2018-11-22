const assert = require('assert');
const data = require('./fixture/simple');
const query = require('../src');

describe('query roots', () => {
    it('should return <data> when query is empty', () => {
        assert.deepEqual(
            query('')(data),
            data
        );
    });

    it('should refer to <data> when @ is using', () => {
        assert.deepEqual(
            query('@')(data),
            data
        );
    });

    it('should refer to <context> when # is using', () => {
        assert.deepEqual(
            query('#')(data, data[0]),
            data[0]
        );
    });

    it('a symbol can be a data root (alias to $.symbol)', () => {
        assert.deepEqual(
            query('errors')(data),
            query('$.errors')(data)
        );
    });

    it('an object can be a data root', () => {
        assert.deepEqual(
            query('{ foo: 1 }.({ foo: foo > 0 })')(data),
            { foo: true }
        );
    });
});