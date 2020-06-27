

export default requestAnimationFrame


export function raf (fn)
{
	var r = requestAnimationFrame(fn)

	return function disposer ()
	{
		if (! r) { return }

		cancelAnimationFrame(r)

		r = null
	}
}


export function cyclic (fn)
{
	var r

	sked()

	function sked ()
	{
		r = requestAnimationFrame(next)
	}

	function next (...args)
	{
		fn(...args)

		sked()
	}

	return function disposer ()
	{
		if (! r) { return }

		cancelAnimationFrame(r)

		r = null
	}
}
