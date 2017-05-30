const Promise = require('bluebird');
const Scraper = require('./scraper');
const scraper = new Scraper();
const cheerio = require('cheerio');
const url = 'http://www.banque-centrale.mg/';

module.exports = function() {

	const _getAll =  function() {
		return scraper.getHtml(url)
		.then(function(html){
			const result = {};
			const scrapped = cheerio.load(html);
			scrapped('td').each(function(i,el){
				const found = (el.attribs && el.attribs.width && el.attribs.width === '20%' &&
					el.next && el.next.attribs && el.next.attribs.width && el.next.attribs.width === '80%');
				
				if (found) {
					let money = el.children[0].data;
					let value = (el.next.children[0].data).replace(/^ */,'');
					result[money] = value;
				}
			});
		return result;
		});
	}
	const _getValue = function(money) {
	return _getAll()
		.then(function(result){
			return result[money];
		});
	}

	return {
		getAll : _getAll,
		getValue: _getValue
	}
};