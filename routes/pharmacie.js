const extractor = require('../modules/extractor/extractor-pharmacie.js')();

module.exports = function(req,res){
	extractor.getAll()
	.then(function(result) {
		console.log(result);
		res.json({message: 'received'});
	})
	.catch(function(e) {
		console.log(e);
		res.status(500)
		.json({
			error: 'ressource not available'
		});
	});
};
