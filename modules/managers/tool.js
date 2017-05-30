const _random = function (min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.random = _random;
