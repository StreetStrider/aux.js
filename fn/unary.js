


module.exports = function unary (fn)
{
	return function unaryied (first)
	{
		return fn.call(this, first);
	}
}
