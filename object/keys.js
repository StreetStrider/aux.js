


var
	slice = Array.prototype.slice

	keys    = Object.keys,
	keysAll = Object.getOwnPropertyNames,

	proto = Object.getPrototypeOf,

	uniq = require('../array/uniq');

module.exports = function keys (object /* flag, flag, ... */) /* @flags */
{
	var
		flags = slice.call(arguments, 1),
		isAll = true,
		isRec = true;

	if (~ flags.indexOf('enum'))
	{
		isAll = false;
	}
	if (~ flags.indexOf('own'))
	{
		isRec = false;
	}

	return _keys(object, isAll, isRec);
}

function _keys (object, isAll, isRec)
{
	if (! isRec)
	{
		return _justKeys(object, isAll)
	}
	else
	{
		var proj = [];

		while (object)
		{
			proj = proj.concat(_justKeys(object, isAll));

			object = proto(object);
		}

		return uniq(proj);
	}
}

function _justKeys (object, isAll)
{
	if (isAll)
	{
		return keysAll(object);
	}
	else
	{
		return keys(object);
	}
}
