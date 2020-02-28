import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default function SideBar() {
  return (
    <ProductConsumer >
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideBarWrapper show={sidebarOpen} onClick={handleSidebar}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="sidebar-link">
                      {link.type}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideBarWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideBarWrapper = styled.nav`
  position: fixed;
  left: 0;
  width: 35%;
  height: 100%;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA));
  border-right: 4px solid var(--primaryColor);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "tranlateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar-link {
    display: block;
    padding: 0.5rem 1.5rem;
    font-size: 1.68rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
    color: var(--mainWhite);
    text-transform: capitalize;
    background: transparent;
    transition: var(--mainTransition);
    letter-spacing: var(--mainSpacing);
  }
  .sidebar-link:hover {
    background: var(--secondaryRGBA);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 18rem;
  }
`;
