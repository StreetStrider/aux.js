


var
	assert = require('assert'),
	eq = assert.deepEqual,

	cat = require('../../array/cat');


describe('array/cat', function ()
{

	it('0 args → []', function ()
	{
		eq([], cat())
	})

	it('1 arg x → [ x ]', function ()
	{
		var x = {};
		eq([ x ], cat(x))
	})

	it('many args x,y,z → [ x, y, z ]', function ()
	{
		var x = {}, y = {}, z = {};
		eq([ x, y, z ], cat(x, y, z))
	})

	it('1 empty array arg → []', function ()
	{
		eq([], cat([]))
	})

	it('many empty array args → []', function ()
	{
		eq([], cat([], [], []))
	})

	it('1 array arg [ x ] → [ x ]', function ()
	{
		var x = {};
		eq([ x ], cat([ x ]))
	})

	it('1 array arg [ x, y, z ] → [ x, y, z ]', function ()
	{
		var x = {}, y = {}, z = {};
		eq([ x, y, z ], cat([ x, y, z ]))
	})

	it('mixed args x, [ y, z ], a → [ x, y, z, a ]', function ()
	{
		var x = {}, y = {}, z = {}, a = {};
		eq([ x, y, z, a ], cat(x, [ y, z ], a))
	})

	it('arrays flatten only one level [[ x ]] → [ x ]', function ()
	{
		var x = {}, y = {};
		eq([[ x ], y ], cat([[ x ]], [ y ]))
	})

	it('0 argument-arg () → []', function ()
	{
		eq([], cat(A()))
	})

	it('1 argument-arg (x) → [ x ]', function ()
	{
		var x = {};
		eq([ x ], cat(A(x)))
	})

	it('many arguments-arg (a, b) → [ a, b ]', function ()
	{
		var a = {}, b = {};
		eq([ a, b ], cat(A(a, b)))
	})

	it('many argument-args (a), (b) → [ a, b ]', function ()
	{
		var a = {}, b = {};
		eq([ a, b ], cat(A(a), A(b)))
	})

	it('mixed args and argument-args x, (a), (b) → [ x, a, b ]', function ()
	{
		var x = {}, a = {}, b = {};
		eq([ x, a, b ], cat(x, A(a), A(b)))
	})

	it('mixed all', function ()
	{
		var
			x = {},
			y = {},
			z = {},
			a = {},
			b = {},
			c = {};

		eq([ x, y, z, a, b, c ], cat(x, [ y, z ], [], a, A(b, c), []));
	})

	function A ()
	{
		return arguments;
	}

})
