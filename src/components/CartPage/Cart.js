import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default function Cart() {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="yuor cart items" center />
      </div>
      {/* cart columns */}
      <CartColumns />
      {/* cart list */}
      <CartList />
      {/* cart total */}
      <CartTotal />
    </section>
  );
}
