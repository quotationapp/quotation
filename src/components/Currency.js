import React, {Component} from 'react';

class Currency extends Component {
    render() {
        return (
            <div className={'col-xs-4 col-md-2 ' + this.props.direction }>
                <div className="input-group">

                    <label>{this.props.symbol}</label>

                    <input type="text" id="from" defaultValue="381,53"/>

                    <button>
                        <img src={this.props.flag} alt={this.props.name + ' (flag)'}/>
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
