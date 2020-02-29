import React, { Component } from "react";
import { linksData } from "./links";
import{socialData}from "./socialData"

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      sidecartOpen: false,
      cartItems: 0,
      links: linksData,
      socialIcon:socialData,
      cart: []
    };
  }
  // handleSidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };
  // handleSidecart
  handleSidecart = () => {
    this.setState({
      sidecartOpen: !this.state.sidecartOpen
    });
  };
  // closeSidecart
  closeCart = () => {
    this.setState({ sidecartOpen: false });
  };
  // openSidecrt
  openCart = () => {
    this.setState({ sidecartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleSidecart: this.handleSidecart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
