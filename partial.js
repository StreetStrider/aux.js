


var slice = Array.prototype.slice;

module.exports = function partial (fn /* a1, a2, ... */)
{
	var prepend = slice.call(arguments, 1);

	return function partialled ()
	{
		var args;

		args = slice.call(arguments);
		args = prepend.concat(args);

		return fn.apply(this, args);
	}
}
