const extractor = require('../modules/extractor/extractor-wiki')();

module.exports = function(req,res){
	const request = req.query.request;
	extractor.getAbstract(request)
	.then(function(result) {
		res.json({result : result});
	})
	.catch(function(e) {
		console.log(e);
		res.status(500)
		.json({
			error: 'ressource not available'
		});
	});
};
