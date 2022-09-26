
import cat from './cat'

export default function join (glue, ...seq)
{
	seq = cat(...seq)

	return seq.join(glue)
}
