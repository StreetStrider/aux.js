


var
	slice = Array.prototype.slice,
	concat = Array.prototype.concat;

module.exports = function cat (/* arrays or arguments objects */)
{
	var args;

	args = slice.call(arguments);
	args = args.map(element);

	return concat.apply([], args);
}

function element (v)
{
	if (v && typeof v.length === 'number')
	{
		return slice.call(v);
	}
	else
	{
		return v;
	}
}
