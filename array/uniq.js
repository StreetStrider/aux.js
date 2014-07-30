


module.exports = function uniq (array)
{
	var proj;

	proj = [];
	for (var i = 0, L = array.length; i < L; i++)
	{
		var item = array[i];
		if (-1 === proj.indexOf(item))
		{
			proj.push(item);
		}
	}

	return proj;
}
