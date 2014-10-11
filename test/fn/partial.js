


var
	eq = require('assert').deepEqual,
	partial = require('../../fn/partial');

describe('fn/partial', function ()
{
	function summarize (a, b, c)
	{
		return a + b + c;
	}

	it('p(fn) → fn*', function ()
	{
		eq(summarize(11, 2, 3), partial(summarize)(11, 2, 3))
	})

	it('p(fn, a) → fn*{a}', function ()
	{
		eq(summarize(11, 2, 3), partial(summarize, 11)(2, 3))
	})

	it('p(fn, a, b) → fn*{a, b}', function ()
	{
		eq(summarize(11, 2, 3), partial(summarize, 11, 2)(3))
	})

	it('p(fn, a, b, c) → fn*{a, b, c}', function ()
	{
		eq(summarize(11, 2, 3), partial(summarize, 11, 2, 3)())
	})

	it('p(p(fn, a), b) → fn*{a, b}', function ()
	{
		var
			p1 = partial(summarize, 1),
			p2 = partial(p1, 2);

		eq(summarize(1, 2, 3), p1(2, 3))
		eq(summarize(1, 2, 3), p2(3))
	})

});
