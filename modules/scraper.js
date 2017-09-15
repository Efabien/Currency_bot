const request = require('request');
const Promise = require('bluebird');

 module.exports = class Scrapper {

	getHtml(url) {
		return new Promise((resolve, reject) => {
			request(url, (err, result, html) => {
				if (err) {
					reject(err);
				} else {
					resolve(html);
				}			
			});
		});
	}
};

