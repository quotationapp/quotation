import React, { Component } from 'react';
import axios from "axios";
import Currency from "../components/Currency";
import { getApiUrl } from "../common/APIUtils";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencies: [],
            fromCode: 'USD',
            toCode: 'BRL',
            fromValue: 1,
            toValue: 1
        }
    }

    componentWillMount() {
        axios
            .get(getApiUrl(this.props.location) + 'currencies')
            .then(response => {
                this.setState({currencies: response.data});
                this.setToValue(this.state.fromValue)
            });
    }

    getCurrency(code) {
        return this.state.currencies.find(currency => currency.code === code);
    }

    setToValue(value) {
        const fromPrice = this.getCurrency(this.state.fromCode).price;
        const toPrice = this.getCurrency(this.state.toCode).price;

        this.setState({
            fromValue: value,
            toValue: (toPrice / fromPrice) * value
        });
    }

    setFromValue(value) {
        const fromPrice = this.getCurrency(this.state.fromCode).price;
        const toPrice = this.getCurrency(this.state.toCode).price;
        this.setState({
            fromValue: (toPrice / fromPrice ) * value,
            toValue: value
        });
    }

    handler(action) {
        switch (action.type) {

            case 'CHANGE_CURRENCY':
                if (action.payload.direction === 'from') {
                    this.setState(
                        {fromCode: action.payload.code},
                        ()=> this.setToValue(this.state.fromValue)
                    );
                } else if (action.payload.direction === 'to') {
                    this.setState(
                        {toCode: action.payload.code},
                        ()=> this.setToValue(this.state.fromValue)
                    );
                }

                break;

            case 'CHANGE_VALUE':
                if (action.payload.direction === 'from') {
                    this.setToValue(action.payload.value);
                } else if (action.payload.direction === 'to') {
                    this.setFromValue(action.payload.value)
                }
                break;

            default:
                break;
        }
    }

    render() {

        if (this.state.currencies.length) {

            return (

                <div className="row values">

                        <Currency
                            direction="from"
                            onChange={this.handler.bind(this)}
                            code={this.state.fromCode}
                            value={this.state.fromValue} />

                        <div className="col-xs-4 last-md change">
                            <button className="btn-change">exchange values</button>
                        </div>

                        <Currency
                            direction="to"
                            onChange={this.handler.bind(this)}
                            code={this.state.toCode}
                            value={this.state.toValue} />

                    <div className="col-xs-4 last-xs info">
                        {/*<p>updated on October 27 at 5:59 pm</p>*/}
                    </div>

                </div>
            );
        } else { return null; }
    }
}

export default Home;
