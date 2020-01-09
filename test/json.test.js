
import { load, dump } from '../json'


describe('json', () =>
{
	it('load', () =>
	{
		expect(load('{}')).deep.eq({})
		expect(load('"a"')).eq('a')
	})

	it('dump', () =>
	{
		expect(dump({})).eq('{}')
		expect(dump('a')).eq('"a"')
	})
})
