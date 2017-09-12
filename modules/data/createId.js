const sha1 = require('sha1');

const base = ['title', 'created'];

module.exports = (data) => {
	return data.map(item => {
		const baseString = base.reduce((accumulator, actual) => {
			return accumulator += item[actual];
		}, '');
		item.id = sha1(baseString);
		return item;
	});
}