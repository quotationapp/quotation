import React, {Component} from 'react';
import currencies from '../assets/jsons/currencies';

class CurrencySelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            current: this.props.code,
        };
    }

    getFlagImage(imageName) {
        let image;
        try { image = require('../assets/images/flags/' + imageName); } catch (e) { image = ''; }
        return image;
    }

    componentWillReceiveProps(props) {}

    getCurrency(code) {
        return currencies.data.find(el => el.code === code);
    }

    showSelect() {
        this.setState({active: true});
    }

    hideSelect() {
        this.setState({active: false});
    }

    selectCurrency(code) {
        return () => {
            this.setState({current: code});
            this.props.onChange({direction: this.props.direction, code:code});
            this.hideSelect();
        }
    }

    render() {
        return (

            <div>
                <button onClick={this.showSelect.bind(this)}>
                    <img src={this.getFlagImage(this.getCurrency(this.state.current).flag)} alt={this.getCurrency(this.state.current).name + ' (flag)'} />
                    <span>{this.getCurrency(this.state.current).code}</span>
                </button>

                <section className={this.state.active ? 'currencies active' : 'currencies'} >
                    <div className="container-fluid">
                        <div className="row currencies-header">
                            <div className="col-xs-4">
                                <h3><span>{this.props.direction}</span></h3>
                                <button className="currencies-close" onClick={this.hideSelect.bind(this)}>
                                    <i className="ic-">close</i>
                                </button>
                            </div>
                        </div>

                        <div className="row middle-sm currencies-list">

                            <div className="col-xs-4">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-2">
                                        {currencies.data.map((currency, key) => {
                                            return (
                                                <button key={key} className="currencies-coin" onClick={this.selectCurrency(currency.code)}>
                                                    <img src={this.getFlagImage(currency.flag)} alt={currency.name + ' (flag)'} />
                                                    <abbr>{currency.code}</abbr>
                                                    <span>{currency.name}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default CurrencySelect;
