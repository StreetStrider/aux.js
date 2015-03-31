


var
	eq = require('assert').strictEqual,

	negate = require('../../fn/negate'),
	disj = require('../../fn/disj');

describe('fn/disj', function ()
{
	var
		noop = function () {},
		True  = function () { return true; },
		False = function () { return false; },
		isArray = Array.isArray,
		Length = function (v) { return v.length; };

	it('0 args → identity', function ()
	{
		var id = disj();
		eq('function', typeof id)
		eq('identity', id.name)

		var x1 = {}, x2 = id(x1);
		eq(x1, x2)
	})

	it('1 arg → same fn', function ()
	{
		eq(disj(noop), noop)
	})

	describe('2 args → disjunction', function ()
	{
		it('disj(False, False) → *False', function ()
		{
			var cFalse = disj(False, False);

			eq('disjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('disj(True, False) → *True', function ()
		{
			var cTrue = disj(True, False);

			eq('disjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('disj(True, True) → *True', function ()
		{
			var cTrue = disj(True, True);

			eq('disjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('disj returns actual value', function ()
		{
			var f = disj(isTrue, Type);

			eq(1, f(1))
			eq(true, f(true))
			eq("A", f("A"))

			eq('boolean', f(false))
			//eq('object', f(null)) // :)
			eq('number', f(0))
			eq('undefined', f(undefined))

			function isTrue (v)
			{
				return v;
			}

			function Type (v)
			{
				return typeof v;
			}
		})

		it('laziness', function ()
		{
			var f = disj(True, NonClean);

			var isLazy = true;

			eq(true, f())
			eq(true, isLazy)

			function NonClean ()
			{
				isLazy = false;
				return true;
			}

			var f = disj(False, NonClean);

			eq(true, f())
			eq(false, isLazy)
		})
	})

	describe('n args → disjunction', function ()
	{
		it('disj(False, False, False) → *False', function ()
		{
			var cFalse = disj(False, False, False);

			eq('disjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('disj(True, False, True) → *True', function ()
		{
			var cTrue = disj(True, False, True);

			eq('disjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('disj(True, True, True) → *True', function ()
		{
			var cTrue = disj(True, True, True);

			eq('disjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('disj returns actual value', function ()
		{
			var f = disj(isTrue, negate(isUndefined), Type);

			eq(1, f(1))
			eq(true, f(true))
			eq("A", f("A"))

			eq(true, f(false))
			eq(true, f(null))
			eq(true, f(0))
			eq('undefined', f(undefined))

			function isTrue (v)
			{
				return v;
			}

			function isUndefined (v)
			{
				return v === undefined;
			}

			function Type (v)
			{
				return typeof v;
			}
		})

		it('laziness', function ()
		{
			var f = disj(False, True, NonClean);

			var isLazy = true;

			eq(true, f())
			eq(true, isLazy)

			function NonClean ()
			{
				isLazy = false;
				return true;
			}

			var f = disj(False, False, NonClean);

			eq(true, f())
			eq(false, isLazy)
		})
	})

})
