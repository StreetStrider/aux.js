

var create = Object.create;

module.exports = function inst (constructor)
{
	return create(constructor.prototype);
}
