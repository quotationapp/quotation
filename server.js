let bodyParser  = require("body-parser");
let schedule    = require('node-schedule');
let mongoose    = require('mongoose');
let express     = require("express");
let moment      = require("moment");
let axios       = require("axios");
let app         = express();

// Custom schema type to Double
require('mongoose-double')(mongoose);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/QuotationDB', { useMongoClient: true });

// Schema types
let SchemaTypes = mongoose.Schema.Types;

// Database schemas
let Currencies = mongoose.model('Currencies', mongoose.Schema({
    code: {type: String, required: true},
    price: {type: SchemaTypes.Double, required: true},
    currency_time: { type: Date },
    updated_at: { type: Date, default: Date.now }
}));

// Update log schema
let Log = mongoose.model('Log', mongoose.Schema({ updated_at: { type: Date, default: Date.now } }));

// API endpoints
app.get('/', (req, res) => { res.send("Quotation API"); });
app.get('/getCurrencies', consumeApi);
app.get('/currencies', (req, res) => {

    Currencies
        .find({}, {code: 1, price: 1, currency_time: 1, updated_at: 1, _id: 0}, function (err, currency) {
            if (err) res.send(err);

            Log.find({}, function (log_err, log) {
                if (log_err) res.send(log_err);

                res.json({
                    last_updating: log[0].updated_at,
                    currencies: currency
                });

            }).sort({_id: -1}).limit(1);
    });

});

// Function to consume Yahoo Finance API and get all currencies
function consumeApi (req, res) {

    let now = moment().format('DD/MM HH:mm:ss');
    let YahooFinanceAPIUrl = 'https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json';

    console.log('%s - Executing cron to consult the Yahoo Finance API.', now);

    // Consult the Yahoo Finance API webservice
    axios.get(YahooFinanceAPIUrl)
        .then(response => {

            if (response.data.list && response.data.list.resources && response.data.list.resources.length) {

                // Drop currencies table
                Currencies.collection.drop();

                response.data.list.resources.forEach(item => {

                    new Currencies({
                        code: item.resource.fields.name.replace("USD/", ""),
                        price: item.resource.fields.price,
                        currency_time: item.resource.fields.utctime
                    })
                        .save()
                        .catch(err => console.log(err));

                });

                Log()
                    .save()
                    .catch(err => console.log(err));

                if (res && res.send) {
                    res.send('The API query completed successfully.');
                }

            } else {
                console.log('%s - Yahoo Finance API did not return currencies.', now);
            }

        })
        .catch(err => console.log(err));
}

// Cron job to consult the currencies every hour.
schedule.scheduleJob('*/30 * * * *', consumeApi);

// Define port
let port = 3001;

// Starting the server
app.listen(port, () => {
    consumeApi();
    console.log("Listening on port %s...", port)
});