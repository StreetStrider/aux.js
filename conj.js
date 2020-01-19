

export default function conj (...fns)
{
	return (...args) =>
	{
		let value = true
		const L = fns.length

		for (let i = 0; (i < L); i++)
		{
			if (! value) { break }

			let fn = fns[i]
			value = (value && fn(...args))
		}

		return value
	}
}
