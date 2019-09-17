import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json')
      .then(response => {
        this.setState({data: response.data})
      });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
