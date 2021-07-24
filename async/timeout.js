
import delay from './delay'

export default function timeout (ms)
{
	return delay(ms).then(() => { throw new TimeoutError })
}


export function TimeoutError ()
{
	Error.call(this)
	this.stack = Error().stack
	this.message = 'Timeout'
}

TimeoutError.prototype = Object.create(Error.prototype)

TimeoutError.prototype.name = 'TimeoutError'
