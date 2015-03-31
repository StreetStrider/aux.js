


var
	slice = Array.prototype.slice,

	identity = require('../identity');

module.exports = function disj (/* pred1, pred2, pred3, ... */)
{
	switch (arguments.length)
	{
	case 0:
		return identity;

	case 1:
		return arguments[0];

	case 2:
		return disj2(arguments[0], arguments[1]);

	default:
		return disjN(slice.call(arguments));
	}
}

function disj2 (pred1, pred2)
{
	return function disjunction ()
	{
		return pred1.apply(this, arguments) || pred2.apply(this, arguments);
	}
}

function disjN (preds)
{
	return function disjunction ()
	{
		var proj;

		for (var i = 0, L = preds.length; i < L; i++)
		{
			var pred = preds[i];
			proj = pred.apply(this, arguments);

			if (proj)
			{
				return proj;
			}
		}

		return proj;
	}
}
