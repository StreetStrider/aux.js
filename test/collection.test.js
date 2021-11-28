
import collection from '../collection'


describe('collection', () =>
{
	it('add', () =>
	{
		var coll = collection()

		expect(coll.add(1)).eq(1)
		expect(coll.add(2)).eq(2)
		expect(coll.add(3)).eq(3)

		expect(coll.has(1)).eq(true)
		expect(coll.has(2)).eq(true)
		expect(coll.has(3)).eq(true)
		expect(coll.has(4)).eq(false)
	})

	it('strict add', () =>
	{
		var coll = collection()

		coll.add(1)
		coll.add(2)
		coll.add(3)

		expect(() => coll.add(1)).throw(ReferenceError)
		expect(() => coll.add(2)).throw(ReferenceError)
		expect(() => coll.add(3)).throw(ReferenceError)
		expect(() => coll.add(4)).not.throw()

		expect(coll.has(1)).eq(true)
		expect(coll.has(2)).eq(true)
		expect(coll.has(3)).eq(true)
		expect(coll.has(4)).eq(true)
	})

	it('strict remove', () =>
	{
		var coll = collection()

		coll.add(1)
		coll.add(2)
		coll.add(3)

		expect(() => coll.remove(1)).not.throw()
		expect(() => coll.remove(1)).throw(ReferenceError)

		expect(coll.remove(2)).eq(2)

		expect(() => coll.remove(4)).throw(ReferenceError)

		expect(coll.has(1)).eq(false)
		expect(coll.has(2)).eq(false)
		expect(coll.has(3)).eq(true)
		expect(coll.has(4)).eq(false)
	})

	it('each', () =>
	{
		var coll = collection()

		coll.add(1)
		coll.add(2)
		coll.add(3)
		coll.remove(3)
		coll.add(4)

		var r = []
		coll.each(value => r.push(value))

		expect(r).deep.eq([ 1, 2, 4 ])
	})

	it('is_empty', () =>
	{
		var coll = collection()

		expect(coll.is_empty()).eq(true)

		coll.add(1)
		expect(coll.is_empty()).eq(false)

		coll.add(2)
		expect(coll.is_empty()).eq(false)

		coll.remove(2)
		expect(coll.is_empty()).eq(false)

		coll.remove(1)
		expect(coll.is_empty()).eq(true)
	})

	it('clear', () =>
	{
		var coll = collection()

		expect(coll.is_empty()).eq(true)
		coll.clear()
		expect(coll.is_empty()).eq(true)

		coll.add(1)

		expect(coll.is_empty()).eq(false)
		coll.clear()
		expect(coll.is_empty()).eq(true)

		coll.add(1)
		coll.add(2)
		coll.add(3)

		expect(coll.is_empty()).eq(false)
		coll.clear()
		expect(coll.is_empty()).eq(true)
	})
})
