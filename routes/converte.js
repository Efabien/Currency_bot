const extractor = require('../modules/extractor')();
const tool = require('../modules/managers/tool');

module.exports = function(req,res){
	const money = req.params.money;
	let amount =tool.numberify(req.query.amount);
	
	extractor.getValue(money)
	.then(function(value) {
		const rate = parseFloat(value);
		res.json({result : rate * amount});
	})
	.catch(function(e) {
		console.log(e);
		res.status(500)
		.json({
			error: 'ressource not available'
		});
	});
};