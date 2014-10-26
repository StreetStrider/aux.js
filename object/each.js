


var
	keys = Object.keys,
	has  = Object.hasOwnProperty;

module.exports = function each (object, fn)
{
	for (var key in object) if (has.call(object, key))
	{
		var v = object[key];

		fn(v, key, object);
	}
}
