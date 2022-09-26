

export default function compose (...fns)
{
	return (input) =>
	{
		return fns.reduceRight((value, fn) => fn(value), input)
	}
}
