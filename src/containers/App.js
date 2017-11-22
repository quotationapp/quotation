import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
        <div>
            <Header title="quotation"/>

            <main className="container-fluid wrapper">
                {this.props.children}
            </main>

            <Footer/>
        </div>
    );
  }
}

export default App;
