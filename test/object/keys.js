


var
	eq = require('assert').deepEqual,
	create = Object.create,
	def = Object.defineProperty,
	keys = require('../../object/keys');

describe('object/keys', function ()
{
	function veq (v1, v2)
	{
		eq(v1.slice().sort(), v2.slice().sort())
	}

	function notenum (object, key)
	{
		def(object, key, {})
	}

	var A, B, C;

	A = create(null);
	A.a1 = 1;
	notenum(A, 'a2');

	B = create(A);
	B.b1 = 1;
	notenum(B, 'b2');
	B.b3 = undefined;
	B.ovr = 1;

	C = create(B);
	C.c1 = 2;
	notenum(C, 'c2');
	C.c3 = null;
	C.ovr = 2;

	it('without flags: all keys, recursive', function ()
	{
		veq([ 'a1', 'a2', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'ovr' ], keys(C))
		veq([ 'a1', 'a2', 'b1', 'b2', 'b3', 'ovr' ], keys(B))
		veq([ 'a1', 'a2' ], keys(A))
	})

	it('flag: own', function ()
	{
		veq([ 'c1', 'c2', 'c3', 'ovr' ], keys(C, 'own'))
		veq([ 'b1', 'b2', 'b3', 'ovr' ], keys(B, 'own'))
		veq([ 'a1', 'a2' ], keys(A, 'own'))
	})

	it('flag: enum', function ()
	{
		veq([ 'a1', 'b1', 'b3', 'c1', 'c3', 'ovr' ], keys(C, 'enum'))
		veq([ 'a1', 'b1', 'b3', 'ovr' ], keys(B, 'enum'))
		veq([ 'a1' ], keys(A, 'enum'))
	})

	it('flags: enum, own', function ()
	{
		veq([ 'c1', 'c3', 'ovr' ], keys(C, 'enum', 'own'))
		veq([ 'b1', 'b3', 'ovr' ], keys(B, 'enum', 'own'))
		veq([ 'a1' ], keys(A, 'enum', 'own'))

		veq([ 'c1', 'c3', 'ovr' ], keys(C, 'own', 'enum'))
		veq([ 'b1', 'b3', 'ovr' ], keys(B, 'own', 'enum'))
		veq([ 'a1' ], keys(A, 'own', 'enum'))
	})

})
