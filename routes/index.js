const express=require('express');
const router = express.Router(); 
const feed = require('./feed');
const currency = require('./currency');
const converte = require('./converte');
const every = require('./every');
const soccerResults = require('./soccerResults');

//defining routes
router.get('/',function(req,res){
	res.send('hello world');
});

/**
requires a secrete token set in the headers as "autorization"
*/

/**getting feed news topic can be foot, sports, actu...accroding to the rss.js file in modules/data
*action are fresh, next, or random
* next action require a ref parameter which is an unix timestamp
*/
router.get('/feed/:topic/:action', feed);

// gets all feed
router.get('/every', every);
/**
money can be EUR, USD, SGBD, JPY...
*/
router.get('/value/:money', currency);

//converte route
router.get('/converte/:money', converte);

router.get('/soccer/championsLeague/results', soccerResults);

exports.router=router;
