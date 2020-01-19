
import conj from '../conj'
import disj from '../disj'


describe('conj', () =>
{
	it('works', () =>
	{
		var C = conj(() => 1, () => 2, () => 3)
		expect(C()).eq(3)

		var C = conj(() => 1, () => 2, () => false)
		expect(C()).eq(false)
	})

	it('passes args', () =>
	{
		var buffer = []

		function push_as (label)
		{
			return (...args) =>
			{
				buffer.push([ label, ...args ])

				return true
			}
		}

		var C = conj(push_as('a'), push_as('b'), push_as('c'))
		expect(C(1, 2, 3)).eq(true)

		expect(buffer).deep.eq(
		[
			[ 'a', 1, 2, 3 ],
			[ 'b', 1, 2, 3 ],
			[ 'c', 1, 2, 3 ],
		])
	})

	it('early stop', () =>
	{
		var c = false

		var C = conj(() => 1, () => 0, () => { c = true })
		expect(C()).eq(0)
		expect(c).false
	})

	it('fns = 1', () =>
	{
		var C = conj(() => 17)
		expect(C()).eq(17)
	})

	it('fns = 0', () =>
	{
		var C = conj()
		expect(C()).eq(true)
	})
})


describe('disj', () =>
{
	it('works', () =>
	{
		var D = disj(() => 0, () => false, () => null)
		expect(D()).eq(null)

		var D = disj(() => 0, () => 1, () => 2)
		expect(D()).eq(1)
	})

	it('passes args', () =>
	{
		var buffer = []

		function push_as (label)
		{
			return (...args) =>
			{
				buffer.push([ label, ...args ])

				return false
			}
		}

		var D = disj(push_as('a'), push_as('b'), push_as('c'))
		expect(D(1, 2, 3)).eq(false)

		expect(buffer).deep.eq(
		[
			[ 'a', 1, 2, 3 ],
			[ 'b', 1, 2, 3 ],
			[ 'c', 1, 2, 3 ],
		])
	})

	it('early stop', () =>
	{
		var c = false

		var D = disj(() => 0, () => 1, () => { c = true })
		expect(D()).eq(1)
		expect(c).false
	})

	it('fns = 1', () =>
	{
		var D = disj(() => 17)
		expect(D()).eq(17)
	})

	it('fns = 0', () =>
	{
		var D = disj()
		expect(D()).eq(false)
	})
})
