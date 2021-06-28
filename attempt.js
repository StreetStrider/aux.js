

export default function attempt (fn, fn_catch)
{
	try
	{
		return fn()
	}
	catch (e)
	{
		return fn_catch(e)
	}
}
