let bodyParser = require("body-parser");
let mongoose = require('mongoose');
let express = require("express");
let axios = require("axios");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/QuotationDB');

let CurrencySchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

let Currencies = mongoose.model('Currencies', CurrencySchema);


// Api endpoints
app.get('/', (req, res) => {
    res.send("Quotation API");
});

// https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json

app.get('/getCurrencyList', (req, res) => {

    Currencies.find({}, function (err, currency) {
        if (err)
            res.send(err);
        res.json(currency);
    });

});

app.get('/saveCurrencyList', (req, res) => {

    Currencies.collection.drop();

    axios.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json')
        .then(function (response) {

            response.data.list.resources.forEach(item => {

                new Currencies({
                    name: item.resource.fields.name,
                    price: item.resource.fields.price
                }).save();

            });
        })
        .catch((err) => {
            console.log(err);
        });

    res.json("Saved successfully!");

});


// Starting the server
let server = app.listen(3001, () => {
    console.log("Listening on port %s...", server.address().port);
});