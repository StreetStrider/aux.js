

export default function sign (value)
{
	if (value >= 0)
	{
		return 1
	}
	else
	{
		return -1
	}
}


export function sign0 (value)
{
	if (value === 0)
	{
		return 0
	}
	else
	{
		return sign(value)
	}
}
