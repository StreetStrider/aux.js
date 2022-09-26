


export default function collection ()
{
	var $col = new Set

	function add (value)
	{
		if (has(value)) throw new ReferenceError

		$col.add(value)

		return value
	}

	function has (value)
	{
		return $col.has(value)
	}

	function is_empty ()
	{
		return (! $col.size)
	}

	function each (fn)
	{
		for (var value of $col)
		{
			fn(value)
		}
	}

	function * iterator ()
	{
		yield * $col
	}

	function remove (value)
	{
		if (! has(value)) throw new ReferenceError

		$col.delete(value)

		return value
	}

	function clear ()
	{
		$col = new Set
	}

	return {
		add,
		has,
		is_empty,
		each,
		[Symbol.iterator]: iterator,
		remove,
		clear,
	}
}
