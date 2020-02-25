import React, { Component } from "react";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      sidecartOpen: false,
      cartItems: 0
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
  closeSidecart = () => {
    this.setState({ sidecartOpen: false });
  };
  // openSidecrt
  openSidecart = () => {
    this.setState({ sidecartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleSidecart: this.handleSidecart,
          closeSidecart: this.closeSidecart,
          openSidecart: this.openSidecart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
