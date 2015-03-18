


var
	eq  = require('assert').strictEqual,
	deq = require('assert').deepEqual,
	invoke = require('../../fn/invoke');

describe('fn/invoke', function ()
{

	it('creates invoker', function ()
	{
		var
			invoker = invoke('x'),
			flag = {};

		eq('invoker', invoker.name)

		eq(flag, invoker({ x: function () { return flag; } }))
	})

	it('creates invoker (arguments)', function ()
	{
		var
			invoker = invoke('x', [ 'A', 'B' ]),
			flag = {};

		function x (a, b)
		{
			return [ flag, a + b ]
		}

		deq([ flag, 'AB' ], invoker({ x: x }))
	})

	it('works on collections', function ()
	{
		var invoker = invoke('toUpperCase');

		deq([ 'A', 'B', 'C' ], [ 'a', 'b', 'c' ].map(invoker))
	})

	it('works on collections (arguments)', function ()
	{
		var invoker = invoke('toFixed', [ 2 ]);

		deq([ '1.00', '3.14', '0.33' ], [ 1, Math.PI, 1/3 ].map(invoker))
	})

})
