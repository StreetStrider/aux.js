
import compose from '../compose'
import pipe from '../pipe'
import { over as pipe_over } from '../pipe'
import curry from '../curry'


function inc (x)
{
	return (x + 1)
}

function double (x)
{
	return (x * 2)
}

describe('compose', () =>
{
	it('works', () =>
	{
		expect(compose).a('function')

		var c = compose(inc, double)

		expect(c(4)).eq(9)
	})
})

describe('pipe', () =>
{
	it('works', () =>
	{
		expect(pipe).a('function')

		var c = pipe(inc, double)

		expect(c(4)).eq(10)
	})

	it('over', () =>
	{
		expect(pipe).a('function')

		var v = pipe_over(5, inc, double)

		expect(v).eq(12)
	})
})


function sum (a, b)
{
	return (a + b)
}

describe('curry', () =>
{
	it('works', () =>
	{
		expect(curry).a('function')

		var s = curry(sum)

		var plus_ten = s(10)

		expect(plus_ten(7)).eq(17)
	})
})
