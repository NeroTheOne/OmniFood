const port = process.env.PORT || 3000;

const hps = require('hbs');
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../views');
app.set('view engine', 'hbs');
hps.registerPartials(__dirname + 'views/partials');

// Helpers
// hps.registerHelper()

app.get('/', (req, res) => {
  res.render(publicPath);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
