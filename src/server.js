const express = require('express');
const morgan = require("morgan");
const app = express();

// settings
app.set('port', process.env.port || 3000);
app.set('json spaces', 4);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routers/router'))
app.use('/api/movies', require('./routers/movies'))

// starting the server
app.listen(app.get('port'), () => console.log(`Example app listening on port http://localhost:${app.get('port')}`));