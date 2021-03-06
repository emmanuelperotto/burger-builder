import React, { Component } from 'react';
import Layout from './Layout';
import BurgerBuilder from '../burger/burger-builder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
