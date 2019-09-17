import React, { Component } from 'react';
import axios from 'axios';
import Item from './components/Item/Item';
import './App.scss';

class App extends Component {
  state = {
    data: {},
    error: false
  }

  componentDidMount() {
    axios.get('https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json')
      .then(response => {
        this.setState({data: response.data})
      })
      .catch(error =>  {
        this.setState({error: true})
      });
  }

  render() {
    let products = <p>Something went wrong.</p>;
    if (this.state.data.cart === undefined) {
      products = <p>Loading...</p>;
    } else if (!this.state.error) {
      products = this.state.data.cart.products.map(product => {
        return <Item key={product.id} id={product.id} />
      });
      
    }

    return (
      <div className="App">
        <section className="Products">
          {products}
        </section>
      </div>
    );
  }
}

export default App;
