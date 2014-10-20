


var
	has   = Object.prototype.hasOwnProperty,
	slice = Array.prototype.slice;

module.exports = function extend (dest, source /* source, source, ... */)
{
	dest = Object(dest);

	switch (arguments.length)
	{
	case 2:
		_extend(dest, source);
		return dest;

	case 1:
		return dest;

	case 0:
		return {};

	default:
		var args = slice.call(arguments, 1);
		for (var i = 0, L = args.length; i < L; i++)
		{
			source = args[i];
			_extend(dest, source);
		}
		return dest;
	}
}

function _extend (dest, source)
{
	for (var key in source) if (has.call(source, key))
	{
		dest[key] = source[key];
	}
}
