
var { parse, stringify } = JSON

export function load (payload)
{
	return parse(payload)
}

export function load_maybe (payload, defval = null)
{
	try
	{
		return load(payload)
	}
	catch (e)
	{
		return defval
	}
}

export function dump (value)
{
	return stringify(value)
}
