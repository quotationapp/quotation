import React, { Component } from 'react';
import axios from "axios";
import Currency from "../components/Currency";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencies: [],
            defaultToCurrency: 'EUR',
            defaultFromCurrency: 'BRL',
            toCurrency: null,
            fromCurrency: null
        }
    }

    componentWillMount() {

        axios.get('http://localhost:3001/currencies')
            .then(response => {
                this.setState({currencies: response.data});
                this.setState({fromCurrency: this.findCurrency(this.state.defaultFromCurrency)});
                this.setState({toCurrency: this.findCurrency(this.state.defaultToCurrency)});
            });
    }

    findCurrency(code) {

        return this.state.currencies.find(currency => currency.code === code);
    }

    getCurrencyValue() {

        return this.state.fromCurrency.price / this.state.toCurrency.price;
    }

    render() {

        let fromCurrency = null;
        let toCurrency   = null;

        if (this.state.fromCurrency) {
            fromCurrency = (
                <Currency
                    value="1"
                    direction="from"
                    symbol="US$"
                    code="USD"
                    name="United States of America"
                    flag="united-states-of-america.svg"/>
            )
        }

        if (this.state.toCurrency) {
            toCurrency = (
                <Currency
                    value={this.getCurrencyValue()}
                    direction="to"
                    symbol="R$"
                    code="BRL"
                    name="Brazilian Real"
                    flag="brazil.svg"/>
            )
        }

        return (
            <div className="row values">

                { fromCurrency }

                <div className="col-xs-4 last-md change">
                    <button className="btn-change">exchange values</button>
                </div>

                { toCurrency }

                <div className="col-xs-4 last-xs info">
                    <p>updated on October 27 at 5:59 pm {this.state.currencies.length}</p>
                </div>

            </div>
        );
    }
}

export default Home;
