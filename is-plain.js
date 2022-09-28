
import is_object from './is-object'

export default function is_plain (object)
{
	if (! is_object(object)) return false
	return (Object.getPrototypeOf(object) === Object.prototype)
}
