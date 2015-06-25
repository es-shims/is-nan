'use strict';

var test = require('tape');
var numberIsNaN = require('./');

test('not NaN', function (t) {
	t.notOk(numberIsNaN(), 'undefined is not NaN');
	t.notOk(numberIsNaN(null), 'null is not NaN');
	t.notOk(numberIsNaN(false), 'false is not NaN');
	t.notOk(numberIsNaN(true), 'true is not NaN');
	t.notOk(numberIsNaN(0), 'positive zero is not NaN');
	t.notOk(numberIsNaN(Infinity), 'Infinity is not NaN');
	t.notOk(numberIsNaN(-Infinity), '-Infinity is not NaN');
	t.notOk(numberIsNaN('foo'), 'string is not NaN');
	t.notOk(numberIsNaN([]), 'array is not NaN');
	t.notOk(numberIsNaN({}), 'object is not NaN');
	t.notOk(numberIsNaN(function () {}), 'function is not NaN');
	t.notOk(numberIsNaN('NaN'), 'string NaN is not NaN');
	t.test('valueOf', function (st) {
		var obj = { valueOf: function () { return NaN; } };
		st.ok(numberIsNaN(Number(obj)), 'object with valueOf of NaN, converted to Number, is NaN');
		st.notOk(numberIsNaN(obj), 'object with valueOf of NaN is not NaN');
		st.end();
	});

	t.end();
});

test('NaN literal', function (t) {
	t.ok(numberIsNaN(NaN), 'NaN is NaN');
	t.end();
});

