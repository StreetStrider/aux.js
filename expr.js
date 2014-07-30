


var expr = module.exports = function expr (expr)
{
	expr = expr.split('@@');

	expr = expr.map(replN);
	expr = expr.map(repl);

	expr = expr.join('@');
	expr = 'return '+ expr;

	return new Function(expr);
}

function repl (str)
{
	return str.replace('@', 'arguments[0]');
}

function replN (str)
{
	return str.replace(reg, function (_, d)
	{
		d = d - 1;
		return 'arguments['+ d +']';
	});
}

var reg = /@(\d+)/g;

expr.not  = expr('! @');
expr.bool = expr('!! @');

expr.always = expr('true');
expr.never  = expr('false');

expr.nothing = expr('null');
