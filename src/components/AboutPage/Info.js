import React from "react";
import Title from "../Title";
import aboutBcg1 from "../../images/aboutBcg1.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 py-3">
            <img
              src={aboutBcg1}
              alt="img"
              className="img-fluid img-thumbnail"
              style={{ background: "var( --darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 py-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              corrupti provident id ex fugiat nesciunt culpa, alias et. Aut,
              ipsam!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              corrupti provident id ex fugiat nesciunt culpa, alias et. Aut,
              ipsam!
            </p>
            <button className="main-link mt-4">more info</button>
          </div>
        </div>
      </div>
    </section>
  );
}
