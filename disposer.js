
import noop from './noop'

export default function Disposer (fn = noop)
{
	if (Disposer.is(fn))
	{
		return fn
	}

	var ds = { dispose, join }

	function dispose ()
	{
		if (! fn) { return }

		try
		{
			fn()
		}
		finally
		{
			fn = null
			ds = null
		}
	}

	function join (other)
	{
		if ((! fn) && (! other))
		{
			return Disposer()
		}

		if (! fn)
		{
			return Disposer(other)
		}
		if (! other)
		{
			return ds
		}

		other = Disposer(other)

		return Disposer(() =>
		{
			try
			{
				if (ds)
				{
					ds.dispose()
				}
			}
			finally
			{
				try
				{
					if (other)
					{
						other.dispose()
					}
				}
				finally
				{
					other = null
				}
			}
		})
	}

	return ds
}


Disposer.is = (it) =>
{
	return (typeof Object(it).dispose === 'function')
}
