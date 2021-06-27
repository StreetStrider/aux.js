
import noop from './noop'
import dict from './dict'


export default function registry (fn_init = noop)
{
	var reg = dict()

	function get (key)
	{
		if (has(key))
		{
			return reg[key]
		}

		return (reg[key] = fn_init(key))
	}

	function set (key, value)
	{
		if (has(key)) throw new ReferenceError

		return (reg[key] = value)
	}

	function remove (key)
	{
		if (! has(key)) throw new ReferenceError

		try
		{
			return reg[key]
		}
		finally
		{
			delete reg[key]
		}
	}

	function has (key)
	{
		return (key in reg)
	}

	function each (fn)
	{
		for (var key in reg)
		{
			fn(reg[key])
		}
	}

	return { get, set, has, each, remove }
}
