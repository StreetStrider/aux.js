
import dict from './dict'

export default function registry (fn_maker = not_found)
{
	var $reg = dict()

	function get (key)
	{
		if (has(key))
		{
			return $reg[key]
		}

		return ($reg[key] = fn_maker(key))
	}

	function set (key, value)
	{
		if (has(key)) throw new ReferenceError

		return ($reg[key] = value)
	}

	function over (key, fn)
	{
		if (! has(key)) return

		fn($reg[key], key)
	}

	function has (key)
	{
		return (key in $reg)
	}

	function each (fn)
	{
		for (var key in $reg)
		{
			fn($reg[key], key)
		}
	}

	function * iterator ()
	{
		for (var key in $reg)
		{
			yield [ key, $reg[key] ]
		}
	}

	function keys ()
	{
		return Object.keys($reg)
	}

	function is_empty ()
	{
		return (! keys().length)
	}

	function remove (key)
	{
		if (! has(key)) throw new ReferenceError

		try
		{
			return $reg[key]
		}
		finally
		{
			delete $reg[key]
		}
	}

	function clear ()
	{
		$reg = dict()
	}

	return {
		get,
		set,
		over,
		has,
		each,
		[Symbol.iterator]: iterator,
		keys,
		is_empty,
		remove,
		clear,
	}
}


function not_found ()
{
	throw new ReferenceError
}
