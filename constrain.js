


var
	slice = Array.prototype.slice,
	freeze = Object.freeze;

var constrain = module.exports = function constrain (fn /* a1, a2, ... */)
{
	var schema = slice.call(arguments, 1);

	return function constrained ()
	{
		var args, grid;

		grid = schema.slice();
		args = slice.call(arguments);

		for (var i = 0, L = grid.length; i < L; i++)
		{
			var v = grid[i];
			if (v === placeholder || v === constrain)
			{
				grid[i] = args.shift();
			}
		}

		grid = grid.concat(args);

		return fn.apply(this, grid);
	}
}

var placeholder = constrain._ = freeze({ symbol: 'placeholder' });
