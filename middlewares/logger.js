module.exports = (req, res, next) => {
	console.log(req.headers);
	return next();
}