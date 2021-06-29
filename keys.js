// TODO: test

var defaults =
{
	own: false,
	deep: false,
}

export default function keys (object, options)
{
	options = { ...defaults, ...options }

	if (options.is_deep)
	{
		return keys_deep(object, options.own)
	}
	else
	{
		return keys_flat(object, options.own)
	}
}

function keys_deep (object, is_own)
{
	var R = null

	while (object)
	{
		var K = keys_flat(object, is_own)

		if (! R)
		{
			R = K
		}
		else
		{
			for (var k of K) { add(R, k) }
		}

		object = Object.getPrototypeOf(object)
	}

	return (R || [])
}

function keys_flat (object, is_own)
{
	if (! is_own)
	{
		return Object.keys(object)
	}
	else
	{
		return Object.getOwnPropertyNames(object)
	}
}

function add (seq, value)
{
	if (! seq.includes(value))
	{
		seq.push(value)
	}
}
