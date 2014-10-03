# aux.js
Idiomatic JavaScript.

## examples
### expr
```javascript
[1, 2, 3, 4, 5].map(expr('2 * @'));
// ↳ [ 2, 4, 6, 8, 10 ]

[3, 7, 5].reduce(expr('@1 + @2'));
// ↳ 15
```
[perf](http://jsperf.com/new-function-vs-function-expression)

### partials
```javascript
// log iterations with prefix
['a', 'b', 'c'].forEach(partial(console.log, 'value:'));

// parse decimal numbers
[ '1', '2', '3' ].map(constrain(parseInt, _, 10, _));
```

### objects
```javascript
map({x:2, y: 3, z: 4}, constrain(Math.pow, _, 2));
// ↳ { x: 4, y: 9, z: 16 }

filter({yes: true, no: 0, ye: 1, nah: ''}, Boolean);
// ↳ { yes: true, ye: 1 }
```

## what in
```
expr: compact functional expression constructor
expr — for creating expressions
expr.bool, expr.not, expr.nothing, expr.always, expr.never — some predefined exprs

functools: works with other functions
fn.partial — creates function partials
fn.constrain — partial with placeholders (sparse partials)
fn.negate — inverts function boolean result value
fn.unary — limits function to first argument
fn.get — creates getters

prop: create object properties (various of shortcuts)
prop.get — getter
prop.set — setter
prop.getset — getter/setter
prop.readonly — readonly, non-enumerable property
prop.notenum — non-enumerable, but modifiable property

object: object itertools, like for arrays
object.each — for each on objects
object.filter — filter on objects
object.map — map on objects
object.extend — merge objects

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
