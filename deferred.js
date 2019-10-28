
import defer from './defer'
import bind  from './bind'

export default function deferred (fn)
{
	return bind(defer, fn)
}
