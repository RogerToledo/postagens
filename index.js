const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.listen(8081, () => console.log('Server is running on port 8081'));