

export default function between (value, left, right)
{
	if (left > right)
	{
		throw new TypeError
	}
	if (value < left)
	{
		return left
	}
	if (value > right)
	{
		return right
	}

	return value
}
