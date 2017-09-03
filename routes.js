const homeController = require('./controllers/home.controller');

let routes = (app) => {
    app.get('/', homeController.caller);
    app.get('/:roomid', homeController.recipient);
};

module.exports = routes;