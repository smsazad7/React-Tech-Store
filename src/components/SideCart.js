import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { closeCart, sidecartOpen, cart } = value;
        return (
          <SidecartWrapper show={sidecartOpen} onClick={closeCart}>
            <p>cart items</p>
          </SidecartWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const SidecartWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 35%;
  height: 100%;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA));
  color: var(--mainWhite);
  border-left: 4px solid var(--primaryColor);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "tranlateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 18rem;
  }
`;

