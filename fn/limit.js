


var slice = Array.prototype.slice;

module.exports = function limit (fn, start, stop)
{
	start || (start = 0);
	stop  || (stop  = fn.length);

	if (start == 0)
	{
		return function limited ()
		{
			var args;

			args = slice.call(arguments, 0, stop);

			return fn.apply(this, args);
		}
	}
	else
	{
		return function limited ()
		{
			var args, prepend;

			args = slice.call(arguments, start, stop);
			prepend = Array(start);
			args = prepend.concat(args);

			return fn.apply(this, args);
		}
	}
}
