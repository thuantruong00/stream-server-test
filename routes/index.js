const authRoute = require('./api-v1/auth');




function routes(app) {
	app.use('/auth', authRoute);
}

module.exports.routes = routes;