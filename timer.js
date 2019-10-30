

export function timeout (timeout, fn)
{
	if (typeof timeout === 'function')
	{
		fn      = timeout
		timeout = 0
	}

	var disposer = function disposer ()
	{
		if (! fn) { return }

		clearTimeout(t1)
		clearTimeout(t2)

		t1  = null
		t2  = null

		fn = null
		timeout = null
		disposer = null
	}

	var t1 = setTimeout(fn, timeout)
	var t2 = setTimeout(disposer, timeout)

	return disposer
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
