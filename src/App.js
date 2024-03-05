import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <History />
        <Products />
        <Guarantee />
        <People />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);
