const request = require('request');
const Promise = require('bluebird');

 module.exports = class Scrapper {

	getHtml(url) {
		return new Promise(function(resolve,reject){
			request(url,function(err,result,html){
				if(err){
					reject(err);
				}else{
					resolve(html);
				}			
			});
		});
	}
};

