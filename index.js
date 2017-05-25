const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth.js');
const routes = require('./routes/router.js');

//setting port
app.set('port', (process.env.PORT || 3000));

//parse data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//allowing cross origin ressources
app.use(cors());

//auth
app.use(auth);

//register routes with the api prefixe
app.use('/api', routes.router);
//spinning the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
