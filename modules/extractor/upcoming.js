const Promise = require('bluebird');
const Scraper = require('../scraper');
const scraper = new Scraper();
const cheerio = require('cheerio');

const url = 'http://www.uefa.com/uefachampionsleague/news/newsid=2105718.html';

module.exports = () => {

	const _getAll =  () => {
		return scraper.getHtml(url)
		.then(html => {
			const result = [];
			const scrapped = cheerio.load(html);
			scrapped('div.nextmatch').each((i, el) => {
				const links = el.children.filter(kid => kid.name === 'a');
				links.forEach((link, index, array) => {
					const match = {};
					if (link.next.data === (' v ')) {
						match.containder1 = link.attribs.title;
						match.containder2 = array[index + 1].attribs.title;
						match.rawDate = array[index + 1].next.data;
						const cleanedDate = match.rawDate.replace(/^ /, '');
						match.date = cleanedDate.split(' ')[0];
						match.houre = cleanedDate.split(' ')[1].replace(/[A-Z]{3}/, '');
						match.timeZone = cleanedDate.split(' ')[1].match(/[A-Z]{3}/)[0];
						result.push(match);
					}
				});
			});
			return result;
		});
	}

	return {
		getAll : _getAll
	}
};