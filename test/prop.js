


var
	desc = Object.getOwnPropertyDescriptor,
	keys = Object.keys,

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

	describe('value: property by flags', function ()
	{

		it('(no params): !enumerable, !writable, !configurable', function ()
		{
			var target = {};

			prop.value(target, 'field', 17);

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: false
			})
		})

		it('enum, enumerable: enumerable', function ()
		{
			var target = {};

			prop.value(target, 'f', 17, 'enum');
			prop.value(target, 'field', 17, 'enumerable');

			eq(desc(target, 'f'), {
				value: 17,

				enumerable: true,
				writable: false,
				configurable: false
			})

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: true,
				writable: false,
				configurable: false
			})
		})

		it('notenum: !enumerable', function ()
		{
			var target = {};

			prop.value(target, 'f', 17);
			prop.value(target, 'field', 17, 'notenum');

			eq(desc(target, 'f'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: false
			})

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: false
			})
		})

		it('write, writable: writable', function ()
		{
			var target = {};

			prop.value(target, 'f', 17, 'write');
			prop.value(target, 'field', 17, 'writable');

			eq(desc(target, 'f'), {
				value: 17,

				enumerable: false,
				writable: true,
				configurable: false
			})

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: false,
				writable: true,
				configurable: false
			})
		})

		it('readonly: !writable', function ()
		{
			var target = {};

			prop.value(target, 'f', 17);
			prop.value(target, 'field', 17, 'readonly');

			eq(desc(target, 'f'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: false
			})

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: false
			})
		})

		it('config, configurable: configurable', function ()
		{
			var target = {};

			prop.value(target, 'f', 17, 'config');
			prop.value(target, 'field', 17, 'configurable');

			eq(desc(target, 'f'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: true
			})

			eq(desc(target, 'field'), {
				value: 17,

				enumerable: false,
				writable: false,
				configurable: true
			})
		})

		it('later flags overwrite previous', function ()
		{
			var target = {};

			prop.value(target, 'enum', 17, 'notenum', 'enum');
			prop.value(target, 'writable', 17, 'readonly', 'write');

			eq(desc(target, 'enum'), {
				value: 17,

				enumerable: true,
				writable: false,
				configurable: false
			})

			eq(desc(target, 'writable'), {
				value: 17,

				enumerable: false,
				writable: true,
				configurable: false
			})
		})
	})
})
