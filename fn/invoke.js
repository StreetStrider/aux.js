


module.exports = function invoke (key, args)
{
	if (args && args.length)
	{
		return function invoker (object)
		{
			return object[key].apply(object, args);
		}
	}
	else
	{
		return function invoker (object)
		{
			return object[key]();
		}
	}
}
