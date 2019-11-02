
import defer     from '../defer'
import deferred  from '../deferred'


describe('defer', () =>
{
	it('works', (done) =>
	{
		defer(() =>
		{
			done()
		})
	})
})

describe('deferred', () =>
{
	it('works', (done) =>
	{
		var d = deferred(() => done())

		d()
	})
})
