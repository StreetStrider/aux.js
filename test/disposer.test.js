
import disposer from '../disposer'


describe('disposer', () =>
{
	it('works', () =>
	{
		var ok = 0
		var ds = disposer(() => { ok = (ok + 1) })

		expect(ok).eq(0)

		ds.dispose()

		expect(ok).eq(1)
	})

	it('idempotent', () =>
	{
		var ok = 0
		var ds = disposer(() => { ok = (ok + 1) })

		expect(ok).eq(0)

		ds.dispose()
		expect(ok).eq(1)

		ds.dispose()
		expect(ok).eq(1)

		ds.dispose()
		expect(ok).eq(1)
	})

	it('diposer of disposer', () =>
	{
		var ds1 = disposer()
		var ds2 = disposer(ds1)

		expect(ds1).eq(ds2)
	})

	it('disposer.is', () =>
	{
		var ds = disposer()

		expect(disposer.is(ds)).true
		expect(disposer.is({ dispose () {} })).true
		expect(disposer.is(() => {})).false
		expect(disposer.is({})).false
		expect(disposer.is(null)).false
	})

	it('join', () =>
	{
		var ok1 = 0
		var ok2 = 0

		var ds1 = disposer(() => { ok1 = (ok1 + 1) })
		var ds2 = disposer(() => { ok2 = (ok2 + 1) })

		expect(ok1).eq(0)
		expect(ok2).eq(0)

		var ds = ds1.join(ds2)

		expect(ok1).eq(0)
		expect(ok2).eq(0)

		ds.dispose()

		expect(ok1).eq(1)
		expect(ok2).eq(1)

		ds.dispose()
		ds1.dispose()
		ds2.dispose()

		expect(ok1).eq(1)
		expect(ok2).eq(1)
	})
})
