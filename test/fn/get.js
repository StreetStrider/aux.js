


var
	eq = require('assert').deepEqual,
	get = require('../../fn/get');

describe('fn/get', function ()
{

	it('creates getter', function ()
	{
		var getter = get('x');

		eq(1, getter({ x: 1 }))
	})

	it('works on collections', function ()
	{
		eq([ 1, 2, 3 ], [ { x: 1 }, { x: 2 }, { x: 3 } ].map(get('x')))
		eq([ 5, 6, 7 ], [ [ 5 ], [ 6 ], [ 7 ] ].map(get('0')))
	})

})
