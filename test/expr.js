

var
	log  = console.log,
	expr = require('../expr');

log([1, 2, 3, 4, 5].map(expr('2 * @')));
log([-2, -1, 0, 1, 2].filter(expr('@ >= 0')));
log([1, 2, 3, 4, 5].filter(expr('@1 % 2 != 0')));
