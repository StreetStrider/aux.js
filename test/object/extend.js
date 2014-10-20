


var
	def = Object.defineProperty,
	eq = require('assert').deepEqual,
	extend = require('../../object/extend');

describe('object/extend', function ()
{

	it('0 args → {}', function ()
	{
		eq({}, extend())
		eq({}, extend(undefined))
	})

	it('1 args (value) → same value', function ()
	{
		var obj = { y: 2 };

		eq({}, extend({}))
		eq({ x: 1 }, extend({ x: 1 })) /* equal value */
		eq(true, obj === extend(obj))  /* same value */
	})

	it('extend(A, B) → extends A with enumerable values of B', function ()
	{
		var A, B, R;

		A = {}
		B = { x: 1 }

		def(B, 'y', { enumerable: false, value: 2 })
		def(B, 'z', { enumerable: true,  value: 3 })

		R = extend(A, B);

		eq(true, R === A)
		eq({ x: 1, z: 3 }, A)
		eq({ x: 1, z: 3 }, R)

		eq({ x: 1, z: 3 }, B)
	})

	it('extend({}, A, B) → ', function ()
	{
		var A, B, R;

		A = { x: 1, y: 1 }
		B = { y: 2, z: 3 }

		R = extend({}, A, B)

		eq({ x: 1, y: 1 }, A)
		eq({ y: 2, z: 3 }, B)

		eq({ x: 1, y: 2, z: 3 }, R)
	})

	it('with many args', function ()
	{
		var et = {}, args = [ {} ], arg, R;

		for (var i = 0; i < 10; i++)
		{
			et[i] = '' + i;

			{
				arg = {}
				arg[i] = '' + i
				args.push(arg)
			}
		}

		R = extend.apply(null, args)

		eq(et, R)
	})

})
