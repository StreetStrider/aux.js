
import noop     from '../noop'
import always   from '../always'
import never    from '../never'
import same     from '../same'
import constant from '../constant'

import explicit from '../explicit'
import bind     from '../bind'
import asap     from '../asap'


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

describe('asap', () =>
{
	it('works', (done) =>
	{
		asap((...args) =>
		{
			expect(args.length).eq(0)
			done()
		})
	})
})

describe('bind', () =>
{
	it('works', () =>
	{
		function sum (a, b = 1)
		{
			return (a + b)
		}

		expect(bind).a('function')

		var ten = bind(sum, 9)

		expect(ten()).eq(10)
		expect(ten(void 0)).eq(10)
		expect(ten(1)).eq(10)
		expect(ten(10)).eq(10)
	})

	it('works multi', () =>
	{
		function sum (a, b, c = 1)
		{
			return (a + b + c)
		}

		var ten = bind(sum, 8, 1)

		expect(ten()).eq(10)
		expect(ten(void 0)).eq(10)
		expect(ten(1)).eq(10)
		expect(ten(10)).eq(10)
		expect(ten(10, void 0)).eq(10)
		expect(ten(10, 10)).eq(10)
	})
})
