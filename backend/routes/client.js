const pfs = require('../library/promisifiedFS.js');
const indexPath = require('../library/distribution.js').getIndexPath();

module.exports.delegateRoutes = function (app) {
    // List of client routes:
    const clientRoutes = [
        /^\/$/, //              '/'
        /^\/dashboard$/, //     '/dashboard'
        /^\/heroes$/, //        '/heroes'
        /^\/detail\/(\d+)$/ //  '/detil/:id'
    ];

    // use default client file for client routes:
    app.use(function (req, res, next) {
        if ( clientRoutes.some( route => route.test(req.url ) ) ) {
            return pfs.readFile( indexPath )
                .then( buffer => res.set('Content-Type', 'text/html').send(buffer) );
        }
        next();
    });
}