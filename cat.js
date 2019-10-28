
import explicit from './explicit'

export default function cat (...args)
{
	var _ = []

	while (args.length)
	{
		var head = args.shift()

		if (! explicit(head))
		{
			continue
		}

		if (! Array.isArray(head))
		{
			_.push(head)
			continue
		}

		for (var index = 0, total = head.length; (index < total); index++)
		{
			var next = head[index]

			if (explicit(next))
			{
				_.push(next)
			}
		}
	}

	return _
}
