

export default function curry (fn, prep_args = [])
{
	if (fn.length < 2) return fn

	return (...args) =>
	{
		args = [ ...prep_args, ...args ]

		if (args.length < fn.length)
		{
			return curry(fn, args)
		}
		else
		{
			return fn(...args)
		}
	}
}
