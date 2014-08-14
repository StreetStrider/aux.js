


var
	eq = require('assert').strictEqual,
	not = require('../../fn/not');

describe('fn/not', function ()
{

	it('inverts return value', function ()
	{
		var
			pos    = function (n) { return n > 0 },
			nonpos = function (n) { return n <= 0 },

			inv_pos = not(pos),
			inv_nonpos = not(nonpos);

		/* - */
		eq(true, pos(1))
		eq(false, inv_pos(1))

		eq(false, pos(0))
		eq(true, inv_pos(0))

		/* - */
		eq(false, nonpos(3))
		eq(true, inv_nonpos(3))

		eq(true, nonpos(-1))
		eq(false, inv_nonpos(-1))

		/* each other */
		eq(pos(1), inv_nonpos(1))
		eq(pos(-1), inv_nonpos(-1))
		eq(pos(0), inv_nonpos(0))

		eq(inv_pos(1), nonpos(1))
		eq(inv_pos(-1), nonpos(-1))
		eq(inv_pos(0), nonpos(0))
	})

})
