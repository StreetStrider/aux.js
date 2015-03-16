


var
	eq = require('assert').strictEqual,
	compose = require('../../fn/compose');

describe('fn/compose', function ()
{
	var
		noop = function () {},
		sqr  = function (v) { return v * v; },
		incr = function (v) { return v + 1; };

	it('0 args → identity', function ()
	{
		var id = compose();
		eq('function', typeof id)

		var x1 = {}, x2 = id(x1);
		eq(x1, x2)
	})

	it('1 arg → same fn', function ()
	{
		eq(compose(noop), noop)
	})

	it('2 args → composition', function ()
	{
		var f = compose(sqr, incr);

		eq('composition', f.name)

		eq(5, f(2))
		eq(2, f(-1))
		eq(101, f(10))

		/* reverse */
		var frev = compose(incr, sqr)

		eq('composition', frev.name)

		eq(9, frev(2))
		eq(0, frev(-1))
		eq(121, frev(10))
	})

	it('n args → composition', function ()
	{
		var fnlist = [];

		for (var i = 0; i < 10; i++)
		{
			fnlist.push(incr)
		}

		fnlist.push(sqr)

		var f = compose.apply(null, fnlist);

		eq('composition', f.name)

		eq(100, f(0))
		eq(4, f(-8))
		eq(0, f(-10))

		/* reverse */
		fnlist.reverse()

		var frev = compose.apply(null, fnlist);

		eq('composition', frev.name)

		eq(10, frev(0))
		eq(74, frev(-8))
		eq(110, frev(-10))
	})

})
