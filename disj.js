

export default function disj (...fns)
{
	return (...args) =>
	{
		let value = false
		const L = fns.length

		for (let i = 0; (i < L); i++)
		{
			if (value) { break }

			let fn = fns[i]
			value = (value || fn(...args))
		}

		return value
	}
}
