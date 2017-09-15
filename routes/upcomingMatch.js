const extractor = require('../modules/extractor/upcoming')();

module.exports = (req, res) => {
	extractor.getAll()
	.then(result => {
		res.json({ matchs : result});
	})
	.catch(e => {
		console.log(e);
		res.status(500)
		.json({
			error: 'ressource not available'
		});
	});
};