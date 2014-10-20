


var
	eq = require('assert').deepEqual,
	filter = require('../../object/filter');

describe('object/filter', function ()
{

	var sample =
	{
		x: 1,
		y: 2,
		z: 3,
		a: '',
		b: false,
		c: null
	}

	it('filter positive', function ()
	{
		var R;

		R = filter(sample, Boolean)

		eq({ x: 1, y: 2, z: 3 }, R)
	})

	it('filter by key', function ()
	{
		var R;

		R = filter(sample, function (v, key)
		{
			return [ 'x', 'a' ].indexOf(key) !== -1;
		})

		eq({ x: 1, a: '' }, R)
	})

	it('filter by full object', function ()
	{
		function level (v, key, obj)
		{
			return (v <= obj.level) && (key != 'level');
		}

		var
			A = { level: 5, x: 1, y: 8 },
			B = { level: 3, x: 2, y: 3, z: 10 };

		eq({ x: 1 }, filter(A, level))
		eq({ x: 2, y: 3 }, filter(B, level))
	})

})
