import React, { Component } from 'react';
import Currency from "../components/Currency";

class Home extends Component {
  render() {
    return (
        <div className="row values">

            <Currency
                value="381,53"
                direction="from"
                symbol="US$"
                code="USD"
                name="United States of America"
                flag="images/flags/united-states-of-america.svg" />

            <div className="col-xs-4 last-md change">
                <button className="btn-change">exchange values</button>
            </div>

            <Currency
                value="1234,56"
                direction="to"
                symbol="R$"
                code="BRL"
                name="Brazilian Real"
                flag="images/flags/brazil.svg" />

            <div className="col-xs-4 last-xs info">
                <p>updated on October 27 at 5:59 pm</p>
            </div>

        </div>
    );
  }
}

export default Home;
