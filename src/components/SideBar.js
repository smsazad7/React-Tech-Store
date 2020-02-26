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
          <SideBarWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
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
  width: 75%;
  height: 100%;
  background: var(--mainGrey);
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
    color: var(--mainBlack);
    text-transform: capitalize;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 18rem;
  }
`;
