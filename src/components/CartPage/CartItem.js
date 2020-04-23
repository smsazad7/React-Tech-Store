import React from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, image, total, count, price, title } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" alt="product" className="img-fluid" />
      </div>
      {/* end of image */}
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* end of title */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price : $</span>
        {price}
      </div>
      {/* end of price */}
      {/* count controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="cart-icon text-primary"
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of count controls */}
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of remove item */}
      {/* total */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">item total : $ {total}</strong>
      </div>
      {/* end of total */}
    </div>
  );
}
