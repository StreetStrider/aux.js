


var
	eq = require('assert').equal,
	deq = require('assert').deepEqual,

	add = require('../../array/add');


describe('array/add', function ()
{
	it('adds element', function ()
	{
		var L1 = [1, 2], L2;

		L2 = add(L1, 3)

		eq(L1, L2)
		deq([ 1, 2, 3 ], L2)
	})

	it('does nothing if element is already present', function ()
	{
		var E = {}, L1 = [ 1, {}, 3 ], L2;

		L2 = add(L1, E)

		eq(L1, L2)
		deq(L1, L2)
	})
})
