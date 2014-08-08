

var
	assert = require('assert'),
	eq = assert.deepEqual,
	expr = require('../expr');

describe('expr', function ()
{

	it ('works as noop if no arg', function ()
	{
		var noop = expr()
		eq(undefined, noop())
	})

	it ('works as noop if empty arg', function ()
	{
		var
			noop1 = expr(''),
			noop2 = expr('   ');

		eq(undefined, noop1())
		eq(undefined, noop2())
	})

	it ('works with null constant', function ()
	{
		var
			nothing = expr('null');

		eq(null, nothing())
		eq(null, expr.nothing())
	})

	it ('some other constants', function ()
	{
		var
			never  = expr('false'),
			always = expr('true'),
			oner   = expr('1'),
			objer  = expr('{}');

		eq(false, never())
		eq(false, expr.never())

		eq(true, always())
		eq(true, expr.always())

		eq(1, oner())
		eq(1, oner())
		eq(1, oner())

		eq({}, objer())
		eq({}, objer())
		eq({}, objer())
	})

	it ('works with @ arg', function ()
	{
		var inc = expr('@ + 1');
		eq(1, inc(0))
		eq(11, inc(10))
	})

	it ('works with @1 arg', function ()
	{
		var inc = expr('@1 + 1');
		eq(1, inc(0))
		eq(11, inc(10))
	})

	it ('works with @2 arg', function ()
	{
		var inc = expr('@2 + 1');
		eq(1, inc(1, 0, 2, 3))
		eq(11, inc(1, 10, 2, 3))
	})

	it ('works with many args', function ()
	{
		var weird = expr('@ + @1 + @2')
		eq(4, weird(1, 2, 3))

		eq(7, weird(1, 5, 7, 8))
	})

	it ('can cast to boolean', function ()
	{
		var
			x = {},
			X = Boolean(x),
			bool  = expr('!! @')
			bool1 = expr('!! @1');

		eq(X, bool(x))
		eq(X, bool1(x))
		eq(X, expr.bool(x))
	})

	it ('can invert arg', function ()
	{
		var
			x = {},
			X = (function (v) { return ! v; })(x)
			not  = expr('! @')
			not1 = expr('! @1');

		eq(X, not(x))
		eq(X, not1(x))
		eq(X, expr.not(x))
	})

	it ('cannot use closure', function ()
	{
		var x = 1, e = expr('x');

		assert.throws(function ()
		{
			e()
		}, ReferenceError)
	});

	it ('works on collections', function ()
	{
		var
			L  = [ -2, 0, -0, 1, 3 ],
			L2 = [ '1', '2', '3' ];

		eq(L, L.map(expr('@')));
		eq(L, L.map(expr('@1')));

		eq(L, L.filter(expr('true')));
		eq(L, L.filter(expr.always));

		eq([], L.filter(expr('false')));
		eq([], L.filter(expr.never));

		eq(3, L.reduce(expr('@1 + @2'), 1));

		eq([ -1, 1, 1, 2, 4 ], L.map(expr('@ + 1')));
		eq([ '11', '21', '31' ], L2.map(expr('@ + 1')));

		eq([ 1, 3 ], L.filter(expr('@ > 0')));
		eq([ 0, 0, 1, 3 ], L.filter(expr('@ >= 0')));

		eq([ 1, 2, 3 ], L2.map(expr('+@')));
	})

})
