
import { load, dump } from '../json'
import { load_maybe } from '../json'


describe('json', () =>
{
	it('load', () =>
	{
		expect(load('{}')).deep.eq({})
		expect(load('"a"')).eq('a')
	})

	it('load_maybe', () =>
	{
		var defval = Symbol('defval')

		expect(load_maybe('{}', defval)).deep.eq({})
		expect(load_maybe('{',  defval)).eq(defval)

		expect(load_maybe('"a"', 17)).eq('a')
		expect(load_maybe( 'a',  17)).eq(17)

		expect(load_maybe('1')).eq(1)
		expect(load_maybe('a')).eq(null)
	})

	it('dump', () =>
	{
		expect(dump({})).eq('{}')
		expect(dump('a')).eq('"a"')
	})
})
