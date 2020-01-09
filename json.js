// TODO: load.maybe
// TODO: dump.maybe

var { parse, stringify } = JSON


export function load (payload)
{
	return parse(payload)
}

export function dump (value)
{
	return stringify(value)
}
