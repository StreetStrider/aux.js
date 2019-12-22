
import asap from './asap'
import bind from './bind'

export default function defer (fn)
{
	return bind(asap, fn)
}
