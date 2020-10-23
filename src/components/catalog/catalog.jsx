import React, {Component} from "react";
import Product from "../product/product";
import ProductService from './../services/productService';

class Catalog extends Component {
      state = {
        products: []
    };
    render(){
        return(
            <div className="catalog-page">
            <div>
             {this.state.products.map((p) => <Product data={p} key={p.id}></Product>)}           
            </div>
          </div>
        );
    }

    componentDidMount() {
        console.log("Load data Here");

        let service = new ProductService();
        const data = service.getProducts();
        this.setState({products: data});
    }
}

export default Catalog;