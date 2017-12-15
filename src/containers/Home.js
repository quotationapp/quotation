import React, { Component } from 'react';
import axios from "axios";
import Currency from "../components/Currency";
import { getApiUrl } from "../common/APIUtils";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencies: [],

            defaultFromCurrency: 'BRL',
            fromCurrencyValue: 1,
            fromCurrency: null,

            defaultToCurrency: 'EUR',
            toCurrencyValue: 1,
            toCurrency: null,
        }
    }

    componentWillMount() {

        axios.get(getApiUrl(this.props.location) + 'currencies')
            .then(response => {
                this.setState({currencies: response.data});
                this.setState({fromCurrency: this.findCurrency(this.state.defaultFromCurrency)});
                this.setState({toCurrency: this.findCurrency(this.state.defaultToCurrency)});
                this.setState({toCurrencyValue: this.getToValue(this.state.fromCurrencyValue)})
            });
    }

    findCurrency(code) {

        return this.state.currencies.find(currency => currency.code === code);
    }

    getToValue(value) {

        return (this.state.fromCurrency.price / this.state.toCurrency.price) * value;
    }

    getFromValue(value) {

        return (this.state.toCurrency.price / this.state.fromCurrency.price ) * value;
    }

    onChangeToValue(value) {

        this.setState({fromCurrencyValue: this.getFromValue(value)});
        this.setState({toCurrencyValue: value});
    }

    onChangeFromValue(value) {
        this.setState({toCurrencyValue: this.getToValue(value)});
        this.setState({fromCurrencyValue: value});
    }

    render() {

        if (this.state.fromCurrency && this.state.toCurrency) {

            return (

                <div className="row values">

                        <Currency
                            onChange={this.onChangeFromValue.bind(this)}
                            value={this.state.fromCurrencyValue}
                            direction="from"
                            symbol="€"
                            code="EUR"
                            name="Euro"
                            flag="european-union.svg"/>


                        <div className="col-xs-4 last-md change">
                            <button className="btn-change">exchange values</button>
                        </div>

                        <Currency
                            onChange={this.onChangeToValue.bind(this)}
                            value={this.state.toCurrencyValue}
                            direction="to"
                            symbol="R$"
                            code="BRL"
                            name="Brazilian Real"
                            flag="brazil.svg"/>

                    <div className="col-xs-4 last-xs info">
                        <p>updated on October 27 at 5:59 pm</p>
                    </div>

                </div>
            );

        } else {
            return null;
        }
    }
}

export default Home;
