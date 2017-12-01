import React, {Component} from 'react';

class Currency extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: 1
        }

    }

    getFlagImage(imageName) {
        let image;
        try { image = require('../assets/images/flags/' + imageName); } catch (e) { image = ''; }
        return image;
    }

    componentWillReceiveProps(props) {
        this.setState({value: parseFloat(props.value).toFixed(2)});
    }

    onChangeValue(event) {
        this.setState({value: parseFloat(event.target.value).toFixed(2)});
    }

    render() {
        return (
            <div className={'col-xs-4 col-md-2 ' + this.props.direction }>
                <div className="input-group">

                    <label>{this.props.symbol}</label>

                    <input type="number" min="1" onChange={ (e) => { this.onChangeValue(e); return this.props.onChange(e.target.value);  } } id="from" value={ this.state.value } />

                    <button>
                        <img src={this.getFlagImage(this.props.flag)} alt={this.props.name + ' (flag)'}/>
                        <span>{this.props.code}</span>
                    </button>

                    <div className="currencies active">
                        <section>
                            <abbr>{this.props.code}</abbr>
                            <p>{this.props.name}</p>
                        </section>
                    </div>

                </div>
            </div>
        );
    }
}

export default Currency;
