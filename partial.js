

export default function partial (fn, ...prep_args)
{
	return (...args) => fn(...prep_args, ...args)
}
