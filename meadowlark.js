const express = require('express');
const ExpressHandlebars = require('express-handlebars')
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', ExpressHandlebars.engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

const fortunes = [
    "Победи свои страхи, или они победят тебя.", "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно.",
];

app.get('/about', (req, res) => {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune });
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
});

app.listen(port, () => {
    console.log('Server started')
});
