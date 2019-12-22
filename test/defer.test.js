
import defer from '../defer'

describe('defer', () =>
{
	it('works', (done) =>
	{
		var d = defer(() => done())

		d()
	})

	it('passes args', (done) =>
	{
		var d = defer(function (a, b)
		{
			expect(arguments.length).eq(2)

			expect(a).eq(1)
			expect(b).eq(2)

			done()
		})

		d(1, 2)
	})
})
