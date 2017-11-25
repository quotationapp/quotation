import React, {Component} from 'react';

class Currency extends Component {

    formatMoney = function(n, c, d, t){
        let c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d === undefined ? "." : d,
            t = t === undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    render() {
        return (
            <div className={'col-xs-4 col-md-2 ' + this.props.direction }>
                <div className="input-group">

                    <label>{this.props.symbol}</label>

                    <input type="text" id="from" defaultValue={ this.convertToLocateValue(this.props.value)} />

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

    getFlagImage(imageName) {

        let image;

        try {
            image = require('../assets/images/flags/' + imageName);
        } catch (e) {
            image = '';
        }

        return image;

    }
}

export default Currency;
