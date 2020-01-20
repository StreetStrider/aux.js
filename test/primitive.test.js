
import noop     from '../noop'
import nothing  from '../nothing'
import always   from '../always'
import never    from '../never'
import same     from '../same'
import constant from '../constant'

import explicit from '../explicit'
import between  from '../between'
import bind     from '../bind'
import unary    from '../unary'
import negate   from '../negate'
import asap     from '../asap'


describe('noop', () =>
{
	it('works', () =>
	{
		expect(noop).a('function')
		expect(noop()).eq(void 0)
	})
})

describe('nothing', () =>
{
	it('works', () =>
	{
		expect(nothing).a('function')
		expect(nothing()).eq(null)
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

describe('between', () =>
{
	it('works', () =>
	{
		expect(between(1, 3, 5)).eq(3)
		expect(between(7, 3, 5)).eq(5)
		expect(between(4, 3, 5)).eq(4)

		expect(between(void 0, 3, 5)).eq(void 0)

		expect(between(NaN, 3, 5)).NaN
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

describe('unary', () =>
{
	it('works', () =>
	{
		function pair (a, b)
		{
			expect(arguments.length).eq(1)

			return [ a, b ]
		}

		var u = unary(pair)

		expect(u(1, 2)).deep.eq([ 1, void 0 ])
		expect(u(2, 3, 4)).deep.eq([ 2, void 0 ])
		expect(u(5)).deep.eq([ 5, void 0 ])
		expect(u()).deep.eq([ void 0, void 0 ])
	})
})

describe('negate', () =>
{
	it('works', () =>
	{
		function yes ()
		{
			return true
		}

		function bool (value)
		{
			return Boolean(value)
		}

		var yes_no  = negate(yes)
		var bool_no = negate(bool)

		expect(yes_no(1)).false
		expect(yes_no(0)).false
		expect(yes_no(true)).false
		expect(yes_no(false)).false

		expect(bool_no(1)).false
		expect(bool_no(0)).true
		expect(bool_no(true)).false
		expect(bool_no(false)).true
	})
})
