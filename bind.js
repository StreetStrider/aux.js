

export default function bind (fn, ...args)
{
	return () => fn(...args)
}
