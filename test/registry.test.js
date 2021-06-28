
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

		expect(reg.get('foo')).eq('FOO:1')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)

		expect(reg.get('foo')).eq('FOO:1')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.remove('foo')).eq('FOO:1')

		expect(reg.has('foo')).eq(false)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)

		expect(reg.get('foo')).eq('FOO:4')
		expect(reg.get('bar')).eq('BAR:2')
		expect(reg.get('qux')).eq('QUX:3')

		expect(reg.has('foo')).eq(true)
		expect(reg.has('bar')).eq(true)
		expect(reg.has('qux')).eq(true)
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

		reg.each(value =>
		{
			r[value] = value
		})

		expect(r).deep.eq({ FOO: 'FOO', BAR: 'BAR' })
	})
})
