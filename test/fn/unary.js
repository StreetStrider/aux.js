


var
	slice = Array.prototype.slice,
	eq = require('assert').deepEqual,
	unary = require('../../fn/unary');

describe('fn/unary', function ()
{
	function args ()
	{
		return slice.call(arguments);
	}

	it('unary(fn)', function ()
	{
		var unars = unary(args);

		eq([ 5 ], unars(5, 3, 7))
		eq([ 1 ], unars(1, 2, 3))
		eq([ 0 ], unars(0))
		eq([ undefined ], unars())
	})
})
