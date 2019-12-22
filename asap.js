

export default function asap (fn)
{
	Promise.resolve().then(() => fn())
}
