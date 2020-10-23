import React, {Component} from "react";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";

class Product extends Component {
    state = {quantity:1};
    
    render(){
        return (
            <div className="product">
                 <img src={"/products/" + this.props.data.image} alt=""></img>
                 
                 <h4>{this.props.data.title}</h4>
                 
                 <div className="prices">             
                 <h5>Total: ${this.props.data.price * this.state.quantity}</h5>
                 <h6>Price: ${this.props.data.price}</h6>
                 </div>

                 <div className="controls">
                 <QuantityPicker minimum={this.props.data.minimum || 1} onValueChange={ (qnty) => this.handleQuantityChange(qnty)}></QuantityPicker>
                 <button className="btn btn-sm btn-info"> Add </button>
            </div>
        </div>
        );
    }

    handleQuantityChange = (quantity) => {
     console.log("Qnty changed", quantity);
     this.setState({quantity: quantity});
  };
}

export default Product;