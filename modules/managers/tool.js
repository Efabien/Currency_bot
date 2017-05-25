const _random = function (min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const _checker = function(ref,data) {
	let locker = false;
	data.forEach(function(el){
		if(ref === el) locker = true;
	});
	return locker;
}

exports.random = _random;
exports.checker = _checker;