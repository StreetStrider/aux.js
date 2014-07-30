


module.exports = function not (fn)
{
	return function notted ()
	{
		return ! fn.apply(this, arguments);
	}
}
