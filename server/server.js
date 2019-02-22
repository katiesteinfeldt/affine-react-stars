let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Array of stars
const starList = [
    {
        name: 'Antares',
        diameter: 123,
    },
    {
        name: 'Betelgeuse',
        diameter: 423,
    },
    {
        name: 'Rigel',
        diameter: 456,
    },
];
app.get('/stars', (req, res) => {
    res.send(starList);
}); 

app.post('/stars', (req, res) => {
    let star = req.body;
    starList.push(star);
    res.sendStatus(200);
}); 


// Start up our server
app.listen(port, function () {
    console.log('listening on port', port);
});