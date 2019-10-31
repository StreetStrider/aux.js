
import noop     from '../noop'
import always   from '../always'
import never    from '../never'
import same     from '../same'
import constant from '../constant'
import explicit from '../explicit'


describe('noop', () =>
{
	it('works', () =>
	{
		expect(noop).a('function')
		expect(noop()).eq(void 0)
	})
})

describe('always', () =>
{
	it('works', () =>
	{
		expect(always).a('function')
		expect(always()).eq(true)
	})
})

describe('never', () =>
{
	it('works', () =>
	{
		expect(never).a('function')
		expect(never()).eq(false)
	})
})

describe('same', () =>
{
	it('works', () =>
	{
		expect(same).a('function')

		expect(same(1)).eq(1)
		expect(same('B')).eq('B')

		var X = { x: 0 }
		expect(same(X)).eq(X)
	})
})

describe('constant', () =>
{
	it('works', () =>
	{
		expect(constant).a('function')

		var X = { x: 0 }
		var C = constant(X)

		expect(C).a('function')

		expect(C()).eq(X)
		expect(C()).eq(X)
		expect(C()).eq(X)
	})
})

describe('explicit', () =>
{
	it('works', () =>
	{
		expect(explicit).a('function')

		expect(explicit(void 0)).eq(false)

		expect(explicit(1)).eq(true)
		expect(explicit(false)).eq(true)
		expect(explicit(null)).eq(true)
	})
})
