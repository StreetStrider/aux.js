
import defer from '../defer'

describe('defer', () =>
{
	it('works', (done) =>
	{
		var d = defer(() => done())

		d()
	})
})
