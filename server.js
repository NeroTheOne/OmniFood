const port = process.env.PORT || 3000;

const hps = require('hbs');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
hps.registerPartials(__dirname + 'views/partials');
// Helpers
// hps.registerHelper()

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
