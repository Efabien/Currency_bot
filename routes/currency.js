const extractor = require('../modules/extractor/extractor-currency')();

module.exports = function(req,res){
	const money = req.params.money;
	extractor.getValue(money)
	.then(function(value) {
		res.json({money : value});
	})
	.catch(function(e) {
		console.log(e);
		res.status(500)
		.json({
			error: 'ressource not available'
		});
	});
};