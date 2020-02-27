import React from "react";
import styled from "styled-components";
import mainBcg2 from "../images/mainBcg2.jpeg";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper newmax={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.newmax ? "100vh" : "60vh")};
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;
  color: var(--mainWhite);
  text-transform: uppercase;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

Hero.defaultProps = {
  img: mainBcg2
};
