const storage = require('../storage/index.js');

module.exports.delegateRoutes = function (app) {
    app.use(function(req, res, next) {
        if ( /^\/api\/.*/.test(req.url) ) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            if (req.method == "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            }
        }
        next();
    });

    app.get('/api/heroes', (req, res, next) => {
        if (!req.query.name) {
            return next();
        }
        storage.find(req.query.name).then( data => res.json(data) );
    });
    
    app.get('/api/heroes', (req, res) => {
        storage.getAll().then( data => res.json(data) );
    });
    
    app.get('/api/heroes/:id', (req, res) => {
        storage.getById(req.params.id).then( data => res.json(data) );
    });
    
    app.put('/api/heroes', (req, res) => {
        storage.update(req.body).then( data => res.json(data) );
    });
    
    app.post('/api/heroes', (req, res) => {
        storage.add(req.body).then( data => res.json(data) );
    });
    
    app.delete('/api/heroes/:id', (req, res) => {
        storage.remove(req.params.id).then( data => res.json(data) );
    });
}