
import cat from '../cat'


describe('cat', () =>
{
	it('cat()', () =>
	{
		expect(cat()).deep.eq([])
	})

	it('cat(primitive)', () =>
	{
		expect(cat(0)).deep.eq([ 0 ])
		expect(cat(1)).deep.eq([ 1 ])
		expect(cat(null)).deep.eq([ null ])
	})

	it('cat(primitive, ...)', () =>
	{
		expect(cat(1, 2, 3)).deep.eq([ 1, 2, 3 ])
	})

	it('cat(list)', () =>
	{
		expect(cat([])).deep.eq([])
		expect(cat([[]])).deep.eq([[]])
		expect(cat([[[]]])).deep.eq([[[]]])

		expect(cat([ 1 ])).deep.eq([ 1 ])
		expect(cat([[ 1 ]])).deep.eq([[ 1 ]])

		expect(cat([ 1, 2 ])).deep.eq([ 1, 2 ])
	})

	it('cat(list, ...)', () =>
	{
		expect(cat([], [], [])).deep.eq([])
		expect(cat([ 1 ], [ 2 ], [ 3 ])).deep.eq([ 1, 2, 3 ])
		expect(cat([ 1, 2 ], [ 3 ], [ 4 ])).deep.eq([ 1, 2, 3, 4 ])
		expect(cat([[ 1 ], 2 ], [ 3 ], [ 4 ])).deep.eq([[ 1 ], 2, 3, 4 ])
		expect(cat([ 1 ], [ 2, 3 ], [ 4, 5 ])).deep.eq([ 1, 2, 3, 4, 5 ])
		expect(cat([[ 2 ], 3 ], [ 4, [ 5 ]])).deep.eq([ [ 2 ], 3, 4, [ 5 ]])
	})

	it('cat(mixed)', () =>
	{
		expect(cat(1, [ 2 ], 3, [ 4, 5 ])).deep.eq([ 1, 2, 3, 4, 5 ])
		expect(cat([], 1, [ 2 ], 3, [ 4, 5 ])).deep.eq([ 1, 2, 3, 4, 5 ])
		expect(cat([[]], 1, [ 2 ], 3, [ 4, 5 ])).deep.eq([ [], 1, 2, 3, 4, 5 ])
	})

	it('skips undefined', () =>
	{
		expect(cat(void 0)).deep.eq([])
		expect(cat(void 0, void 0)).deep.eq([])
		expect(cat(void 0, [ void 0 ])).deep.eq([])
		expect(cat([ void 0, void 0 ])).deep.eq([])

		expect(cat(void 0, 1)).deep.eq([ 1 ])
		expect(cat(void 0, 1, void 0)).deep.eq([ 1 ])
		expect(cat(void 0, [ void 0, 1 ], 2)).deep.eq([ 1, 2 ])
		expect(cat(1, [ void 0, 2, void 0 ], [ 3 ])).deep.eq([ 1, 2, 3 ])
	})
})
