const _random =  (min,max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const _numberify =  str => {
	return parseFloat(str.replace(/,/,'.'));
}

const _upperCaseFirst = str => {
	if (str) return str.replace(/^\w/, l => { return l.toUpperCase(); });
}

exports.random = _random;
exports.numberify = _numberify;
exports.upperCaseFirst = _upperCaseFirst;
