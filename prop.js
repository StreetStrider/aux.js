


var prop = module.exports = {};

var def = Object.defineProperty;

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

prop.readonly = function readonly (object, key, value)
{
	def(object, key, { value: value });
}

prop.notenum = function notenum (object, key, value)
{
	def(object, key, { value: value, enumerable: false, writable: true, configurable: true });
}
