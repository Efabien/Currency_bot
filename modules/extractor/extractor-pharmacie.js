const Promise = require('bluebird');
const Scraper = require('../scraper');
const scraper = new Scraper();
const cheerio = require('cheerio');

const url = 'http://ordrepharmacien.mg/recherche-pharmacie-de-garde/';

module.exports = function() {

	const _getAll =  function() {
		return scraper.getHtml(url)
		.then(function(html){
			const result = [];
			const scrapped = cheerio.load(html);
			scrapped('tr').each(function(i,el){
				const found = (el.children.length === 7);
				if(found){
					result.push(el.children.map(function(child){
							if (child.name === 'td') return child.children;
					}));
				}
				});
			return result
			});

	};

	return {
		getAll : _getAll
	}
};