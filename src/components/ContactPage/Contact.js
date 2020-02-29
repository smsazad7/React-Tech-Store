import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" center="center" />
            <form
              className="mt-5"
              action="https://formspree.io/smsazad7@gmail.com"
              method="POST"
            >
              {/* first */}
              <div className="form-group">
                <input
                  type="text"
                  name="FirstName"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Enter Your subject"
                />
              </div>
              {/* message */}
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="enter your comment here ...."
                />
              </div>
              <div className="form-group mt-3">
                        <input type="submit" value="send" className="form-control bg-primary text-white"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
