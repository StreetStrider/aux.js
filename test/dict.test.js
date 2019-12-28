
import dict from '../dict'


describe('dict', () =>
{
	it('works', () =>
	{
		var H = dict()

		expect(H).an('object')
		expect(Object.getPrototypeOf(H)).eq(null)
		expect(Object.keys(H).length).eq(0)

		expect(H).not.property('hasOwnProperty')
	})
})
