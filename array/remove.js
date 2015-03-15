


module.exports = function remove (array, item)
{
	var index = array.indexOf(item);

	if (~ index)
	{
		array.splice(index, 1);
	}

	return array;
}
