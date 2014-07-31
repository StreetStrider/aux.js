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
fn.limit — limits function to only range of its args
fn.not — inverts function boolean result value
fn.get — creates getters

prop: create object properties (various of shortcuts)
prop.get — getter
prop.set — setter
prop.getset — getter/setter
prop.value — readonly, non-enumerable property

object: object itertools, like for arrays
object.each — for each on objects
object.filter — filter on objects
object.map — map on objects

array: tools for arrays, arguments, other array-like objects
array.cat — concatenate arrays
array.uniq — simple, order-safe uniq

top-level primitives:
noop — function, does nothing, return undefined
identity — function, returns first argument
```

## license
MIT. Copyright © 2014 StreetStrider.
