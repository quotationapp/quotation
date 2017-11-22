import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="row values">
            <div className="col-xs-4 col-md-2 from">
                <div className="input-group">
                    <label>US$</label>
                    <input type="text" id="from" value="381,53"/>
                        <button>
                            <img src="images/flags/united-states-of-america.svg" alt="United States of America (flag)"/>
                                <span>usd</span>
                        </button>
                        <div className="currencies active">
                            <section>
                                <abbr>brl</abbr>
                                <p>Brazilian Real</p>
                            </section>
                            <section className="selected">
                                <abbr>usd</abbr>
                                <p>US Dollar</p>
                            </section>
                        </div>
                </div>
            </div>
            <div className="col-xs-4 last-md change">
                <button className="btn-change">exchange values</button>
            </div>
            <div className="col-xs-4 col-md-2 to">
                <div className="input-group">
                    <label>R$</label>
                    <input type="text" id="to" value="1234,56"/>
                    <button>
                        <img src="images/flags/brazil.svg" alt="Brazil (flag)"/>
                            <span>brl</span>
                    </button>
                    <div className="currencies active">
                        <section className="selected">
                            <abbr>brl</abbr>
                            <p>Brazilian Real</p>
                        </section>
                        <section>
                            <abbr>usd</abbr>
                            <p>US Dollar</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="col-xs-4 last-xs info">
                <p>updated on October 27 at 5:59 pm</p>
            </div>
        </div>
    );
  }
}

export default Home;
