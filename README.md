# aux.js
Idiomatic JavaScript.

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

top-level primitives:
noop — function, does nothing, return undefined
identity — function, returns first argument
```

## license
MIT. Copyright © 2014 StreetStrider.
