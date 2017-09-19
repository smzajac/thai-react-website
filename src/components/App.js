import React, { Component } from 'react';
import '../styles/App.css';
import Appetizers from './Appetizers';
import Desserts from './Desserts';
import Entrees from './Entrees';
import Layout from './Layout';

import ReactDOM from 'react-dom';






class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.

componentDidMount(){
  console.log('Did mount.');
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(results => results.json())
  .then(responseData => {
    this.setState({
      appetizers: responseData[0].Appetizers,
      entrees: responseData[0].Entrees,
      desserts: responseData[0].Desserts

    });

  })
    .catch((error) =>{
      console.log("shit broke", error);
  })
}
// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>

  render() {
    console.log("test", this.state.appetizers);
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <Layout>
      <Appetizers appetizers={this.state.appetizers} />
      <Entrees entrees={this.state.entrees} />
      <Desserts desserts={this.state.desserts} />
      </Layout>

    );
  }
}

export default App;
