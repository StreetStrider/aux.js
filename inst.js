

export default function inst (constructor)
{
	return Object.create(constructor.prototype)
}
