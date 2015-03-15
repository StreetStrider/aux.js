


var
	eq = require('assert').equal,
	deq = require('assert').deepEqual,

	remove = require('../../array/remove');


describe('array/remove', function ()
{
	it('removes element', function ()
	{
		var E = {}, L1 = [E, 1, 2], L2;

		L2 = remove(L1, E)

		eq(L1, L2)
		deq(L1, L2)
	})

	it('does nothing if element is not present', function ()
	{
		var L1 = [ 1, 3 ], L2;

		L2 = remove(L1, 2)

		eq(L1, L2)
		deq(L1, L2)
	})
})
