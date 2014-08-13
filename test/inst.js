


var
	eq = require('assert').strictEqual,
	proto = Object.getPrototypeOf,
	inst = require('../inst');

describe('inst', function ()
{

	function F ()
	{

	}

	F.prototype.x = 1;

	it('works with constructor prototype', function ()
	{
		var f = inst(F);

		eq(f instanceof F, true)
		eq(proto(f), F.prototype)
		eq(f.constructor, F)
		eq(proto(f).constructor, F)
		eq(f.x, F.prototype.x)
	})

	function F2 (y)
	{
		/* dual constructor */
		/* both `new F2()` and just `F2()` */
		var f2 = inst(F2);

		f2.y = y;

		return f2;
	}

	F2.prototype.x = 1;

	it('works for dual constructors', function ()
	{
		var
			y_new = 2,
			y_fn  = 2,
			f2_new = new F2(y_new),
			f2_fn  = F2(y_fn);

		eq(f2_new instanceof F2, true)
		eq(proto(f2_new), F2.prototype)
		eq(f2_new.constructor, F2)
		eq(proto(f2_new).constructor, F2)

		eq(f2_new.x, F2.prototype.x)
		eq(f2_new.y, y_new)

		eq(f2_fn.x, F2.prototype.x)
		eq(f2_fn.y, y_fn)
	})

})
