const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// simple request log:
app.use(function (req, res, next) {
    console.log(`Time:  ${Date.now()},   Method: ${`${req.method},`.padEnd(10)} URL: ${req.url}`);
    next();
});

/* ROUTING */
// static routes:
app.use( express.static( require('./library/distribution.js').getPath() ) );
// client routes:
require('./routes/client.js').delegateRoutes(app);
// API routes:
require('./routes/api.js').delegateRoutes(app);

// run app:
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));