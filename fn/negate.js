


module.exports = function negate (fn)
{
	return function negated ()
	{
		return ! fn.apply(this, arguments);
	}
}
