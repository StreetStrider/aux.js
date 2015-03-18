


var
	slice = [].slice,
	method = require('../../fn/method'),

	assert = require('assert'),
	throws = assert.throws,
	eq = assert.equal,
	eqd = assert.deepEqual;

describe('fn/method', function ()
{

	var obj =
	{
		self: function () { return this },
		args: function () { return slice.call(arguments) }
	}

	it('method(obj, \'name\') fixates object', function ()
	{
		var self = method(obj, 'self');

		eq(obj, self())
	})

	it('method(obj, \'name\') works as obj.name', function ()
	{
		var args = method(obj, 'args');

		eqd([ 1, 2, 3 ], args(1, 2, 3))
	})

	it('method do late binding', function ()
	{
		var
			obj = {},
			late = method(obj, 'late');

		throws(function ()
		{
			obj.late()
		},
		TypeError)

		throws(function ()
		{
			late()
		},
		TypeError)

		obj.late = function (v) { return v }
		var A = { x: 1 }

		eqd(A, obj.late(A))
		eqd(A, late(A))
	})

	it('fn name = methodic', function ()
	{
		var fn = method({}, 'key');

		eq('methodic', fn.name)
	})

})
