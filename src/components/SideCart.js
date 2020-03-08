import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { closeCart, cartOpen, cart, cartTotal } = value;
        return (
          <SidecartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img src={`../${item.image}`} width="45" alt="img" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize totla-items">
              cart total : ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </SidecartWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const SidecartWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 70%;
  height: 100%;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA));
  color: var(--mainWhite);
  border-left: 4px solid var(--primaryColor);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "tranlateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 25rem;
  }
  overflow: scroll;
  padding: 5rem;
  padding-top:1rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
  .totla-items {
    color: #cf0a0a;
  }
`;
