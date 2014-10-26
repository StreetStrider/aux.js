


var
	eq = require('assert').deepEqual,
	each = require('../../object/each');

describe('object/each', function ()
{

	it('each → undefined', function ()
	{
		eq(undefined, each({}, noop));
	})

	it('iterates over object', function ()
	{
		var src, R = {}, et;

		src =
		{
			x: 1,
			y: 2,
			z: 3
		}

		et =
		{
			x: [ 1, src ],
			y: [ 2, src ],
			z: [ 3, src ]
		}

		each(src, function (v, key, obj)
		{
			R[key] = [ v, obj ];
		})

		eq(R, et)
	})

	it('iterates over own enumerable properties only', function ()
	{
		var
			base = { a: 1, b: 2 },
			src  = Object.create(base),

			R = {}, et;

		src.x = 3;
		src.y = 4;
		Object.defineProperty(src, 'z', { value: 5, enumerable: false });

		et =
		{
			x: [ 3, src ],
			y: [ 4, src ]
		}

		each(src, function (v, key, obj)
		{
			R[key] = [ v, obj ];
		})

		eq(R, et)
	})

	function noop () {}

})
