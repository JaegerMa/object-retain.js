'use strict';

function retain(object, filter)
{
	debugger;
	//Check if we're called from an object
	if(typeof(this) === 'object' && typeof(object) === 'function' && filter === undefined)
	{
		filter = object;
		object = this;
	}

	if(typeof(object) !== 'object' || typeof(filter) !== 'function')
		return object;

	for(var key in object)
	{
		if(!filter(key, object[key], object))
			delete object[key];
	}

	return object;
}

module.exports = retain;
