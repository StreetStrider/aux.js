


var
	eq = require('assert').deepEqual,
	constrain = require('../../fn/constrain'),
	c = constrain,
	_ = constrain._;

describe('fn/constrain', function ()
{
	function binom (a, x, b)
	{
		return a * x + b
	}

	it('c(fn) → fn*', function ()
	{
		eq(binom(11, 2, 3), constrain(binom)(11, 2, 3))
	})

	it('c(fn, a) → fn*{a}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, 11)(2, 3))
	})

	it('c(fn, a, b) → fn*{a, b}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, 11, 2)(3))
	})

	it('c(c(fn, a), b) → fn*{a, b}', function ()
	{
		var
			c1 = constrain(binom, 11),
			c2 = constrain(c1, 2);

		eq(binom(11, 2, 3), c1(2, 3))
		eq(binom(11, 2, 3), c2(3))
	})

	it('c(fn, a, b, c) → fn*{a, b, c}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, 11, 2, 3)())
	})

	it('c(fn, _) → fn*', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, _)(11, 2, 3))
		eq(binom(11, 2, 3), constrain(binom, c)(11, 2, 3))
	})

	it('c(fn, _, _) → fn*', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, _, _)(11, 2, 3))
		eq(binom(11, 2, 3), constrain(binom, c, c)(11, 2, 3))
	})

	it('c(fn, _, _, _) → fn*', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, _, _, _)(11, 2, 3))
		eq(binom(11, 2, 3), constrain(binom, c, c, c)(11, 2, 3))
	})

	it('c(fn, _, b) → fn*{_, b}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, _, 2)(11, 3))
		eq(binom(11, 2, 3), constrain(binom, c, 2)(11, 3))
	})

	it('c(fn, a, _, c) → fn*{a, _, c}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, 11, _, 3)(2))
		eq(binom(11, 2, 3), constrain(binom, 11, c, 3)(2))
	})

	it('c(fn, _, _, c) → fn*{_, _, c}', function ()
	{
		eq(binom(11, 2, 3), constrain(binom, _, _, 3)(11, 2))
		eq(binom(11, 2, 3), constrain(binom, c, c, 3)(11, 2))
	})

	function un (x, y)
	{
		x === undefined && (x = 'U')
		y === undefined && (y = 'U')

		return x + y
	}

	it('_ ↔ undefined', function ()
	{
		eq(un(), constrain(un, _, _)())
		eq(un(undefined, undefined), constrain(un, _, _)())
		eq(un(), constrain(un, _, _)(undefined, undefined))
		eq(un(5), constrain(un, _)(5))
		eq(un(undefined, 5), constrain(un, _, 5)())

		eq(un(), constrain(un, c, c)())
		eq(un(undefined, undefined), constrain(un, c, c)())
		eq(un(), constrain(un, c, c)(undefined, undefined))
		eq(un(5), constrain(un, c)(5))
		eq(un(undefined, 5), constrain(un, c, 5)())
	})

	it('works on collections', function ()
	{
		var
			log = console.log,
			parseInt10 = constrain(parseInt, _, 10, _);

		function nan (x)
		{
			return (x != x) ? 'NaN' : x
		}

		eq(
			[ '1', 'NaN', 'NaN', 'NaN', 'NaN' ],
			[ '1', '2', '3', '4', '5' ]
			.map(parseInt)
			.map(nan)
		)

		eq(
			[ 1, 2, 3, 4, 5 ],
			[ '1', '2', '3', '4', '5' ]
			.map(parseInt10)
		)

		var
			parseIntHex = constrain(parseInt, _, 16, _);

		eq(
			['1', 'NaN', 'NaN', 'NaN', 'NaN'],
			[ '1a', '2b', '3c', '4d', '5e' ]
			.map(parseInt).map(nan)
		)

		eq(
			[ 26, 43, 60, 77, 94 ],
			[ '1a', '2b', '3c', '4d', '5e' ]
			.map(parseIntHex)
		)
	})

	it('fn name = constrained', function ()
	{
		var fn = constrain(function foo (v) { return v; });

		eq('constrained', fn.name)
	})

})
