const port = process.env.PORT || 3000;

const hps = require('hbs');
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname + '/public')));

hps.registerPartials(__dirname + 'views/partials');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
