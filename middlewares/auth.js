module.exports = function(req, res, next) {
	const authorized = (req.headers.authorization && req.headers.authorization === process.env.RESTIFEO_AUTH_TOKEN);
	if (authorized) return next();
	console.log('unauthorized connection');
	res.json({'message':'you are not authorized to use this service'});
}
