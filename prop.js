


var
	slice = Array.prototype.slice,
	def   = Object.defineProperty;

var prop = module.exports = function prop (object, key, descriptor)
{
	return def(object, key, descriptor);
}

prop.get = function get (object, key, getter)
{
	def(object, key, { get: getter });
}

prop.set = function set (object, key, setter)
{
	def(object, key, { set: setter });
}

prop.getset = function getset (object, key, getter, setter)
{
	def(object, key, { get: getter, set: setter });
}

prop.value = function value (object, key, value /*, flag, flag, ... */)
{
	var
		flags = slice.call(arguments, 3),
		descriptor = { value: value };

	flags.forEach(setup(descriptor));

	def(object, key, descriptor);
}

function setup (descriptor)
{
	return function setuper (flag)
	{
		switch (flag)
		{
		case 'enum':
		case 'enumerable':
			descriptor.enumerable = true;
			return;

		case 'notenum':
			descriptor.enumerable = false;
			return;

		case 'write':
		case 'writable':
			descriptor.writable = true;
			return;

		case 'readonly':
			descriptor.writable = false;
			return;

		case 'config':
		case 'configurable':
			descriptor.configurable = true;
			return;

		case 'noconfig':
			descriptor.configurable = false;
			return;
		}
	}
}
