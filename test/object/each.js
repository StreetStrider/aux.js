


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

	function noop () {}

})
