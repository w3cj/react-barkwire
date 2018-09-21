import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main id="app">
          <Routes />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
