

export function timeout (timeout, fn)
{
	if (typeof timeout === 'function')
	{
		fn      = timeout
		timeout = 0
	}

	var t = setTimeout(fn, timeout)

	return function disposer ()
	{
		if (! fn) { return }

		clearTimeout(t)

		t  = null
		fn = null
		timeout = null
	}
}

export function interval (interval, fn)
{
	var t = setInterval(fn, interval)

	return function disposer ()
	{
		if (! fn) { return }

		clearInterval(t)

		t  = null
		fn = null
		interval = null
	}
}
