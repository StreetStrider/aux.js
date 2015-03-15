# aux.js [![license|mit](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](MIT-LICENSE.txt) [![npm|aux.js](http://img.shields.io/badge/npm-aux.js-CB3837.svg?style=flat-square)](https://www.npmjs.org/package/aux.js) [![npm test|with mocha](http://img.shields.io/badge/npm%20test-with%20mocha-9E785A.svg?style=flat-square)](http://mochajs.org/)
Idiomatic JavaScript.

**aux.js** is very thin set of utilities. It does only things that cannot be done in simple manner in JS,
and defer to native stuff in any other case.

## examples
### partials
```javascript
// partial — for partial application (like bind, but without `this`)
['a', 'b', 'c'].forEach(partial(console.log, 'value:'));
// ↳ log iterations with prefix

// constrain — like partial, but allow placeholders in arguments
// (sparse arguments, partialRight and other specific cases)
[ '1', '2', '3' ].map(constrain(parseInt, _, 10, _));
// ↳ parse decimal numbers
```

### arrays
```javascript
// concatenate arrays and non-arrays
// better way to cast sequence of values to array
// works with `arguments` object as well
cat(1, [2, 3], 4);
// ↳ [1, 2, 3, 4]

// remove duplicates in array, preserves order
uniq([4, 5, 5, 7]);
// ↳ [4, 5, 7]
```

### objects
```javascript
map({x:2, y: 3, z: 4}, constrain(Math.pow, _, 2));
// ↳ { x: 4, y: 9, z: 16 }

filter({yes: true, no: 0, ye: 1, nah: ''}, Boolean);
// ↳ { yes: true, ye: 1 }
```

### expr
```javascript
// very terse lambdas
[1, 2, 3, 4, 5].map(expr('2 * @'));
// ↳ [ 2, 4, 6, 8, 10 ]

[3, 7, 5].reduce(expr('@1 + @2'));
// ↳ 15
```
Suprisingly, works well:
[perf](http://jsperf.com/new-function-vs-function-expression)

## what in
```
expr: compact functional expression (lambdas) constructor
expr — for creating expressions
expr.bool, expr.not, expr.nothing, expr.always, expr.never — some predefined exprs

functools: works with other functions
fn.partial — creates function partials
fn.constrain — partial with placeholders (sparse partials)
fn.negate — inverts function boolean result value
fn.unary — limits function to first argument
fn.get — creates getters
fn.invoke - creates method invokers
fn.method — late binding, binds key with function value to its object

prop: create object properties (various of shortcuts)
prop.get — getter
prop.set — setter
prop.getset — getter/setter
prop.value — build property by flags

object: object itertools, like for arrays
object.each — for each on objects
object.filter — filter on objects
object.map — map on objects
object.extend — merge objects
object.keys — get not-enumerable keys and keys from prototype chain

array: tools for arrays, arguments, other array-like objects
array.cat — concatenate arrays
array.uniq — simple, order-safe uniq

inst: instantiating objects for dual constructors
inst — create object with constructor prototype

top-level primitives:
noop — function, does nothing, return undefined
identity — function, returns first argument
```

## license
MIT. Copyright © 2014 StreetStrider.
