import React from "react";
import Hero from "../components/Hero";
import CartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

export default function CartPage() {
  return (
    <div>
      <Hero img={CartBcg} />
      <CartSection />
    </div>
  );
}
