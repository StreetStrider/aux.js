


var
	eq = require('assert').strictEqual,

	negate = require('../../fn/negate'),
	conj = require('../../fn/conj');

describe('fn/conj', function ()
{
	var
		noop = function () {},
		True  = function () { return true; },
		False = function () { return false; },
		isArray = Array.isArray,
		Length = function (v) { return v.length; };

	it('0 args → identity', function ()
	{
		var id = conj();
		eq('function', typeof id)
		eq('identity', id.name)

		var x1 = {}, x2 = id(x1);
		eq(x1, x2)
	})

	it('1 arg → same fn', function ()
	{
		eq(conj(noop), noop)
	})

	describe('2 args → conjunction', function ()
	{
		it('conj(False, False) → *False', function ()
		{
			var cFalse = conj(False, False);

			eq('conjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('conj(True, False) → *False', function ()
		{
			var cFalse = conj(True, False);

			eq('conjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('conj(True, True) → *True', function ()
		{
			var cTrue = conj(True, True);

			eq('conjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('conj returns actual value', function ()
		{
			var f = conj(isArray, Length);

			eq(false, f(null))
			eq(0,     f([]))
			eq(5,     f([ 1, 2, 3, 4, 5 ]))
		})

		it('laziness', function ()
		{
			var f = conj(False, NonClean);

			var isLazy = true;

			eq(false, f())
			eq(true, isLazy)

			function NonClean ()
			{
				return isLazy = false;
			}

			var f = conj(True, NonClean);

			eq(false, f())
			eq(false, isLazy)
		})
	})

	describe('n args → conjunction', function ()
	{
		it('conj(False, False, False) → *False', function ()
		{
			var cFalse = conj(False, False, False);

			eq('conjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('conj(True, False, True) → *False', function ()
		{
			var cFalse = conj(True, False, True);

			eq('conjunction', cFalse.name);

			eq(false, cFalse());
		})

		it('conj(True, True, True) → *True', function ()
		{
			var cTrue = conj(True, True, True);

			eq('conjunction', cTrue.name);

			eq(true, cTrue());
		})

		it('conj returns actual value', function ()
		{
			var f = conj(isArray, Length, Boolean);

			eq(false, f(null))
			eq(0,     f([]))
			eq(true,  f([ 1, 2, 3, 4, 5 ]))

			var isEmpty = conj(isArray, negate(Length));

			eq(false, isEmpty(null))
			eq(true,  isEmpty([]))
			eq(false, isEmpty([ 1, 2, 3, 4, 5 ]))
		})

		it('laziness', function ()
		{
			var f = conj(True, False, NonClean);

			var isLazy = true;

			eq(false, f())
			eq(true, isLazy)

			function NonClean ()
			{
				return isLazy = false;
			}

			var f = conj(True, True, NonClean);

			eq(false, f())
			eq(false, isLazy)
		})
	})

})
