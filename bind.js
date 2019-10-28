

export default function bind (fn, input)
{
	return () => fn(input)
}
