

export default function disj (...fns)
{
	return (...args) =>
	{
		return fns.reduce((value, fn) =>
		{
			if (value)
			{
				return value
			}

			return (value || fn(...args))
		}
		, false)
	}
}
