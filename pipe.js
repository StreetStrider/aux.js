

export default function pipe (...fns)
{
	return (input) =>
	{
		return fns.reduce((value, fn) => fn(value), input)
	}
}


export function over (input, ...fns)
{
	return fns.reduce((value, fn) => fn(value), input)
}
