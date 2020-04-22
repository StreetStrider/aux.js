
import div from './div'


export default function divmod (D, dv)
{
	return [ div(D, dv), (D % dv) ]
}
