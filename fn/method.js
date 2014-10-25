


module.exports = function method (object, key)
{
	return function methodic ()
	{
		return object[key].apply(object, arguments);
	}
}
