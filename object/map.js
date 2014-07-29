


var each = require('./each');

module.exports = function map (object, fn)
{
	var proj = {};

	each(object, function (v, key, object)
	{
		proj[key] = fn(v, key, object);
	});

	return proj;
}
