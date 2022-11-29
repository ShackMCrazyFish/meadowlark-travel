const express = require('express');
const ExpressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', ExpressHandlebars.engine({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => {
    console.log('Server started')
  });
} else {
  module.exports = app;
}
