

export default function unary (fn)
{
	return (first) => fn(first)
}
