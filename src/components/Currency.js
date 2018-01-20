import React, {Component} from 'react';
import CurrencySelect from '../components/CurrencySelect';


class Currency extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? parseFloat(props.value).toFixed(2) : parseFloat(1).toFixed(2),
            code: props.code
        };
    }

    componentWillReceiveProps(props) {
        this.setState({value: parseFloat(props.value).toFixed(2)});
        this.setState({code: props.code});
    }

    handler(action) {
        switch (action.type) {
            case 'CHANGE_CURRENCY':
                this.props.onChange({type: 'CHANGE_CURRENCY', payload: action.payload});
                break;

            case 'CHANGE_VALUE':
                this.setState({value: parseFloat(action.payload.target.value).toFixed(2)});
                this.props.onChange({type: 'CHANGE_VALUE', payload: {direction: this.props.direction, value: action.payload.target.value}});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className={'col-xs-4 col-md-2 ' + this.props.direction }>
                <div className="input-group">

                    <label>{this.state.symbol}</label>

                    <input
                        type="number"
                        min="0"
                        value={ this.state.value }
                        onChange={e => { this.handler({type: 'CHANGE_VALUE', payload: e}) } } />

                    <CurrencySelect
                        onChange={ e => this.handler({type: 'CHANGE_CURRENCY', payload: e})}
                        direction={this.props.direction}
                        code={this.state.code} />

                </div>
            </div>
        );
    }
}

export default Currency;
