import React, { Component } from "react";
import { linksData } from "./links";
import { socialData } from "./socialData";
import { items } from "./productData";

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
      socialIcon: socialData,
      cart: [],
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      storeProducts: [],
      filteredProducts: [],
      featuredProducts: [],
      singleProduct: {},
      loading: false
    };
  }
  componentDidMount() {
    this.setProducts(items);
  }
  setProducts = product => {
    let storeProducts = product.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields,image };
      return product;
    });
    //featured Products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };
  // get cart from local storage
  getStorageCart = () => {
    return [];
  };
  //get product from local storage
  getStorageProduct = () => {
    return {};
  };
  //get Totals
  getTotals = () => {};
  // add Totals
  addTotals = () => {};
  //sync storage
  syncStorage = () => {};
  //add to cart
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };
  //set  single Product
  setSingleProduct = id => {
    console.log(`set  single Product${id}`);
  };
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
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
