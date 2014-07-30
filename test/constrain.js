


var
	log = console.log,
	constrain = require('../fn/constrain'),
	_ = constrain._;


var
	parseInt10 = constrain(parseInt, _, 10, _);

log([ '1', '2', '3', '4', '5' ].map(parseInt));
log([ '1', '2', '3', '4', '5' ].map(parseInt10));


var
	parseIntHex = constrain(parseInt, _, 16, _);

log([ '1a', '2b', '3c', '4d', '5e' ].map(parseInt));
log([ '1a', '2b', '3c', '4d', '5e' ].map(parseIntHex));
