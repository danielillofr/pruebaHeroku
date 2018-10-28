const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

app.listen(80, () => {
    console.log('Escuchando puerto: ', 3000);
});