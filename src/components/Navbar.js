import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";


export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleSidecart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleSidecart} />
                <div className="nav-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 10;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.89rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .nav-items {
    position: absolute;
    top: -12px;
    right: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 3px;
    border-radius: 100%;
  }
`;
