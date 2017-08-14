module.exports = (req, res, next) => {
	console.log(`Call from ${req.headers['user-agent']} with authorization ${req.headers.authorization}`);
	return next();
}