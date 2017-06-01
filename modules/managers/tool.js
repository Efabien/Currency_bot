const _random = function (min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const _numberify = function (str) {
	return parseFloat(str.replace(/,/,'.'));
}

exports.random = _random;
exports.numberify = _numberify;
