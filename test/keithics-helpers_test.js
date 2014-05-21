'use strict';

var khelpers = require('../lib/keithics-helpers.js');

var assert = require('assert');

describe('KeithicsTest', function () {
    describe('#randomString(5)', function () {
        it('should return a random string', function () {
            assert.equal('aaaaa', khelpers.randomString(5, 'a'));
        });
    });

    describe('#ellipsize(str, 32, .5)', function () {
        it('should split a string at a defined maximum length, and insert an ellipsis', function () {
            var str = 'this_string_is_entirely_too_long_and_might_break_my_design.jpg';
            assert.equal('this_string_is_e&hellip;ak_my_design.jpg', khelpers.ellipsize(str, 32, .5));
        });
    });

    describe('#addToSetUnique(arr,data,key,value)', function () {
        it('will push an object to an array if the key:value is true', function () {
            var data = {name: 'gmail', email: 'keithics@gmail.com'};

            var arr = [
                {name: 'Keith Levi Lumanog', email: 'keith@webninjamobile.com'},
                {name: 'keithics', email: 'keithics@yahoo.com'},

            ];

            var arr2 = [
                {name: 'Keith Levi Lumanog', email: 'keith@webninjamobile.com'},
                {name: 'keithics', email: 'keithics@yahoo.com'},
                {name: 'gmail', email: 'keithics@gmail.com'}

            ];

              // console.log(khelpers.addToSetUnique(arr, data, 'email', 'keithics@gmail.com'));
            assert.deepEqual(arr2, khelpers.addToSetUnique(arr, data, 'email', 'keith@webninjamobile.com'));
            assert.equal(arr, khelpers.addToSetUnique(arr, data, 'email', 'keithics@gmail.com'));


        });

    });

});