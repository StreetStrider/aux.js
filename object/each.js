


var keys = Object.keys;

module.exports = function each (object, fn)
{
	var it, L;

	it = keys(object);
	L  = it.length;

	for (var i = 0; i < L; i++)
	{
		var key, v;

		key = it[i];
		v   = object[key];

		fn(v, key, object);
	}
}
