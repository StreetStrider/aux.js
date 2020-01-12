

export default function negate (fn)
{
	return (...args) =>
	{
		return (! fn(...args))
	}
}
