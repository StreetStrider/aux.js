
import registry from '../registry'


describe('registry', () =>
{
	it('get', () =>
	{
		var num = 0
		var reg = registry(key => `${ key.toUpperCase() }:${ ++num }`)

		expect(reg.has('foo')).eq(false)
		expect(reg.has('bar')).eq(false)
		expect(reg.has('qux')).eq(false)

		expect(reg.keys()).deep.eq([])

		expect(reg.get('foo')).eq('FOO:1')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)

		expect(reg.keys().sort()).deep.eq([ 'foo', 'bar', 'qux' ].sort())

		expect(reg.get('foo')).eq('FOO:1')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.remove('foo')).eq('FOO:1')

		expect(reg.has('foo')).eq(false)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)

		expect(reg.keys().sort()).deep.eq([ 'bar', 'qux' ].sort())

		expect(reg.get('foo')).eq('FOO:4')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)

		expect(reg.keys().sort()).deep.eq([ 'foo', 'bar', 'qux' ].sort())
	})

	it('strict get', () =>
	{
		var reg = registry()

		expect(() => reg.get('foo')).throw(ReferenceError)
		expect(() => reg.get('bar')).throw(ReferenceError)

		reg.set('foo', 'FOO:1')

		expect(reg.get('foo')).eq('FOO:1')
		expect(() => reg.get('bar')).throw(ReferenceError)
	})

	it('strict set', () =>
	{
		var reg = registry(key => key.toUpperCase())

		expect(reg.get('foo')).eq('FOO')
		expect(reg.set('bar', 'BAR')).eq('BAR')

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)

		expect(() => reg.set('foo', '111')).throw(ReferenceError)
		expect(() => reg.set('bar', '222')).throw(ReferenceError)
		expect(() => reg.set('qux', 'QUX')).not.throw()

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)
	})

	it('strict remove', () =>
	{
		var reg = registry(key => key.toUpperCase())

		reg.set('foo', 'foo')
		reg.set('bar', 'bar')

		expect(() => reg.remove('foo')).not.throw()
		expect(() => reg.remove('bar')).not.throw()
		expect(() => reg.remove('qux')).throw(ReferenceError)

		expect(() => reg.remove('foo')).throw(ReferenceError)
		expect(() => reg.remove('bar')).throw(ReferenceError)
		expect(() => reg.remove('qux')).throw(ReferenceError)

		reg.set('ban', 'BAN')
		expect(reg.has('ban')).eq(true)
		expect(reg.get('ban')).eq('BAN')
	})

	it('each', () =>
	{
		var reg = registry(key => key.toUpperCase())

		reg.get('foo')
		reg.set('bar', 'BAR')
		reg.get('qux')

		reg.remove('qux')

		var r = {}

		reg.each((value, key) =>
		{
			r[key] = value
		})

		expect(r).deep.eq({ foo: 'FOO', bar: 'BAR' })
	})

	it('for-of', () =>
	{
		var reg = registry()

		reg.set('x', 1)
		reg.set('y', 2)
		reg.set('z', 3)

		var r = []

		for (var pair of reg)
		{
			r.push(pair)
		}

		expect(r).deep.eq(
		[
			[ 'x', 1 ],
			[ 'y', 2 ],
			[ 'z', 3 ],
		])
	})

	it('is_empty', () =>
	{
		var reg = registry()

		expect(reg.is_empty()).eq(true)

		reg.set('foo', 'foo')
		expect(reg.is_empty()).eq(false)

		reg.set('bar', 'bar')
		expect(reg.is_empty()).eq(false)

		reg.remove('bar')
		expect(reg.is_empty()).eq(false)

		reg.remove('foo')
		expect(reg.is_empty()).eq(true)
	})

	it('clear', () =>
	{
		var reg = registry()

		expect(reg.is_empty()).eq(true)
		reg.clear()
		expect(reg.is_empty()).eq(true)

		reg.set('foo')

		expect(reg.is_empty()).eq(false)
		reg.clear()
		expect(reg.is_empty()).eq(true)

		reg.set('foo', 'foo')
		reg.set('bar', 'bar')
		reg.set('qux', 'qux')

		expect(reg.is_empty()).eq(false)
		reg.clear()
		expect(reg.is_empty()).eq(true)
	})
})
