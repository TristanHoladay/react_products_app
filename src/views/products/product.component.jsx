import * as React from 'react';
import { Component } from 'react';
import Axios from 'axios';

 
class Product extends React.Component {
    state = { 
         products: [],
         productState: false
    }

    async getAllProducts() {
      await Axios.get("http://localhost:4000/products").then(reponse => {
          this.setState({
              products: reponse
          })
          console.log(this.state.products);
      });
    }

   setProductsToTrue = () => {
        this.setState(state => ({
            productState: true
        }));
        console.log(this.state.productState);
    }


    componentDidMount() {
        this.getAllProducts();
    }

    render() { 
        return ( 
            <div>
                <h1>Products</h1>
                <button onClick={this.forceUpdate}>Get Products</button>
                <ul>
                    {this.state.products.length > 0 && this.state.products.map(product => (
                        <li key={product}>{product.name}</li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Product;