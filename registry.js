// maybe / when?

import dict from './dict'


export default function registry (fn_maker = not_found)
{
	var reg = dict()

	function get (key)
	{
		if (has(key))
		{
			return reg[key]
		}

		return (reg[key] = fn_maker(key))
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

	function keys ()
	{
		return Object.keys(reg)
	}

	return {
		get,
		set,
		has,
		each,
		keys,
		remove,
	}
}


function not_found ()
{
	throw new ReferenceError
}
