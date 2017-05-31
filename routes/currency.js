const extractor = require('../modules/extractor.js')();

module.exports = function(req,res){
	const money = req.params.money;
	extractor.getValue(money)
	.then(function(value) {
		res.json({money : value});
	})
	.catch(function(e) {
		console.log(e);
		res.json({
			error: true,
			message: 'ressource not available'
		});
	});
};