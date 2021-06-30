


export default function collection ()
{
	var col = new Set

	function add (value)
	{
		if (has(value)) throw new ReferenceError

		col.add(value)

		return value
	}

	function remove (value)
	{
		if (! has(value)) throw new ReferenceError

		col.delete(value)

		return value
	}

	function has (value)
	{
		return col.has(value)
	}

	function each (fn)
	{
		for (var value of col)
		{
			fn(value)
		}
	}

	return { add, has, each, remove }
}
