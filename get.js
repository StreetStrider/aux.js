


module.exports = function get (key)
{
	return function getter (object)
	{
		return object[key];
	}
}
