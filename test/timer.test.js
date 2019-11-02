/* eslint max-nested-callbacks: [ 2, 4 ] */

import { timeout }  from '../timer'
import { interval } from '../timer'


describe('timer', () =>
{
	describe('timeout', () =>
	{
		it('works(0)', (done) =>
		{
			timeout(() => done())
		})

		it('works(ms)', (done) =>
		{
			timeout(1, () => done())
		})

		it('cancel', (done) =>
		{
			var ds = timeout(200, () => done(new Error('must be cancelled')))

			setTimeout(() => ds(), 100)
			setTimeout(() => done(), 300)
		})

		it('cancel multiple', (done) =>
		{
			var ds = timeout(50, () => void 0)

			ds()
			ds()
			done()
		})
	})

	describe('interval', () =>
	{
		it('works(0)', (done) =>
		{
			var c = 0
			var rs = ''

			var ds = interval(50, () =>
			{
				c = (c + 1)
				rs = (rs + ',' + (c * 100))

				if (c === 3)
				{
					next()
				}
			})

			function next ()
			{
				expect(rs).eq(',100,200,300')
				ds()
				done()
			}
		})

		it('cancel multiple', (done) =>
		{
			var ds = interval(50, () => void 0)

			ds()
			ds()
			done()
		})
	})
})
