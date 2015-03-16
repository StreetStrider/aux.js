

var
	slice = Array.prototype.slice,

	identity = require('../identity');

module.exports = function compose (/* composition L -> R: fn1, fn2, fn3 */)
{
	switch (arguments.length)
	{
	case 0:
		return identity;

	case 1:
		return arguments[0];

	case 2:
		return compose2(arguments[0], arguments[1]);

	default:
		return composeN(slice.call(arguments));
	}
}

function compose2 (fn1, fn2)
{
	return function composition ()
	{
		var proj;

		proj = fn1.apply(this, arguments);
		proj = fn2.call(this, proj);

		return proj;
	}
}

function composeN (fns)
{
	return function composition ()
	{
		var proj = fns[0].apply(this, arguments);

		for (var i = 1, L = fns.length; i < L; i++)
		{
			var fn = fns[i];
			proj = fn.call(this, proj);
		}

		return proj;
	}
}
