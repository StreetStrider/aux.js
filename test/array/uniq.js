


var
	eq = require('assert').deepEqual,
	uniq = require('../../array/uniq');

describe('array/uniq', function ()
{
	var testArray = [ 3, 5, 5, 4, 5, 7, 1];

	it('actually works and preserves order', function ()
	{
		eq([ 3, 5, 4, 7, 1 ], uniq(testArray))
	})

	it('works well with monotonous array', function ()
	{
		eq([ 5 ], uniq([ 5, 5, 5 ]))
	})

	it('works well with empty array', function ()
	{
		eq([], uniq([]))
	})

	it('works with references (objects)', function ()
	{
		var x = {}, y = {};
		eq([ x, y ], uniq([ x, x, y, y ]))
	})

})
