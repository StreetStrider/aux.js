


var
	desc = Object.getOwnPropertyDescriptor,

	eq = require('assert').deepEqual,

	prop = require('../prop');

describe('prop', function ()
{

	it('get: getter', function ()
	{
		var target = {};

		function getter ()
		{
			return 17
		}

		prop.get(target, 'field', getter);

		eq(target.field, 17);
		eq(target.field, 17);
		target.field = 13;
		eq(target.field, 17);

		eq(desc(target, 'field'), {
			get: getter,
			set: undefined,

			enumerable: false,
			configurable: false
		})
	})

	it('set: setter', function ()
	{
		var target = {};

		function setter (value)
		{
			this._field = value
		}

		prop.set(target, 'field', setter);

		eq(target.field, undefined);
		eq(target.field, undefined);

		eq(target._field, undefined);

		target.field = 17;
		eq(target.field, undefined);
		eq(target._field, 17);

		eq(desc(target, 'field'), {
			get: undefined,
			set: setter,

			enumerable: false,
			configurable: false
		})
	})

	it('getset: getter & setter', function ()
	{
		var target = {};

		function getter (value)
		{
			return this._field
		}

		function setter (value)
		{
			this._field = value
		}

		prop.getset(target, 'field', getter, setter);

		eq(target.field, undefined);
		eq(target.field, undefined);

		eq(target._field, undefined);

		target.field = 17;
		eq(target.field, 17);
		eq(target._field, 17);

		eq(desc(target, 'field'), {
			get: getter,
			set: setter,

			enumerable: false,
			configurable: false
		})
	})

	it('readonly: constant, readonly value', function ()
	{
		var target = {};

		prop.readonly(target, 'field', 17);

		eq(target.field, 17);
		eq(target.field, 17);
		target.field = 13;
		eq(target.field, 17);

		eq(desc(target, 'field'), {
			value: 17,

			writable: false,
			enumerable: false,
			configurable: false
		})
	})

})
