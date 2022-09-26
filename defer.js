
import asap from './asap'

export default function defer (fn)
{
	return (...args) =>
	{
		asap(() => fn(...args))
	}
}
