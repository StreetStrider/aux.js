


var each = require('./each');

module.exports = function filter (object, fn)
{
	var proj = {};

	each(object, function (v, key, object)
	{
		if (fn(v, key, object))
		{
			proj[key] = v;
		}
	});

	return proj;
}
