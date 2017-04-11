var express=require('express');
var cors=require('cors');
var app = express();
var bodyParser=require('body-parser');
var routes=require('./modules/routes/router.js');
//setting port
app.set('port', (process.env.PORT || 3000))
//parse data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//allowing cross origin ressources
app.use(cors());

//register routes with the api prefixe
app.use('/api', routes.router);
//spinning the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})