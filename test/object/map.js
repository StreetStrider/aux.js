


var
	eq = require('assert').deepEqual,
	map = require('../../object/map');

describe('object/map', function ()
{

	it('map value', function ()
	{
		var A = { x: 1, y: 2 };

		function dup (v) { return  v  * 2 }
		function xup (v) { return 'x' + v }

		eq({ x: 2, y: 4 }, map(A, dup))
		eq({ x: 'x1', y: 'x2' }, map(A, xup))
	})

	it('map with key', function ()
	{
		var A = { 1: 2, 2: 5, 3: 4 };

		function dot (v, key) { return key * v }

		eq({ 1: 2, 2: 10, 3: 12 }, map(A, dot))
	})

	it('map with full object', function ()
	{
		var A = { add: 2, x: 1, y: 3 };

		function add (v, key, obj)
		{
			if (key === 'add')
			{
				return v;
			}
			else
			{
				return v + obj.add;
			}
		}

		eq({ add: 2, x: 3, y: 5 }, map(A, add))
	})

})
