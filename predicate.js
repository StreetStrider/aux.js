


var predicate = module.exports = {};

predicate.always = function always () { return true; }
predicate.never  = function never  () { return false; }

predicate.not = function not (v) { return ! v; }
// for not(not(x)) just use Boolean
