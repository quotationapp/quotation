let bodyParser  = require("body-parser");
let schedule    = require('node-schedule');
let mongoose    = require('mongoose');
let express     = require("express");
let axios       = require("axios");
let app         = express();

// Custom schema type to Double
require('mongoose-double')(mongoose);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/QuotationDB', { useMongoClient: true });

// Schema types
let SchemaTypes = mongoose.Schema.Types;

// Database schemas
let Currencies = mongoose.model('Currencies', mongoose.Schema({
    name: {type: String, required: true},
    price: {type: SchemaTypes.Double, required: true},
    currency_time: { type: Date },
    updated_at: { type: Date, default: Date.now }
}));

// Update log schema
let Log = mongoose.model('Log', mongoose.Schema({ updated_at: { type: Date, default: Date.now } }));

// API endpoints
app.get('/', (req, res) => { res.send("Quotation API"); });
app.get('/currencies', (req, res) => {

    Currencies.find({}, {name: 1, price: 1, currency_time: 1, updated_at: 1, _id: 0}, function (err, currency) {
        if (err)
            res.send(err);
        res.json(currency);
    });

});

// Cron job to consult the currencies every hour.
schedule.scheduleJob('0 * * * *', function(){
    console.log('Executing cron to consult the Yahoo Finance API.');

    axios.get('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json')
        .then(function (response) {

            if (response.data.list.resources && response.data.list.resources.length) {

                Currencies.collection.drop();

                response.data.list.resources.forEach(item => {

                    new Currencies({
                        name: item.resource.fields.name,
                        price: item.resource.fields.price,
                        currency_time: item.resource.fields.utctime
                    }).save();

                });

                Log().save()
            }

        })
        .catch(err => {
            console.log(err);
        });

    res.json("Saved successfully!");
});


// Starting the server
let server = app.listen(3001, () => {
    console.log("Listening on port %s...", server.address().port);
});