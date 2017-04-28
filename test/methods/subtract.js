'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const Subtract = require('../../lib/methods/subtract');

lab.experiment('subtract', () => {

    lab.test('returns 1 when 2 - 1', (done) => {

        Code.expect(Subtract(2, 1)).to.equal(1);
        done();
    });
});
