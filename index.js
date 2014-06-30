"use strict";

/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan */

module.exports = Number.isNaN || function isNaN(value) {
	return value !== value;
};

