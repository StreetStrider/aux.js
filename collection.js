
import noop from './noop'


export default function collection (fn_add = noop)
{
	var col = new Set

	function add (value)
	{
		if (has(value)) throw new ReferenceError

		col.add(value)

		fn_add(value)

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
