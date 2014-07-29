


var aux = module.exports = Object.create(null);

aux.partial = require('./partial');
aux.constrain = require('./constrain');
aux.limit = require('./limit');

aux.noop = require('./noop');
aux.nothing = require('./nothing');
aux.constant = require('./constant');
aux.identity = require('./identity');

aux.predicate = require('./predicate');
aux.not = require('./not');

aux.get = require('./get');
aux.prop = require('./prop');
aux.each = require('./each');
