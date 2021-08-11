import React from "react"
import "../styles/contactPage.css"
import truck from "../images/truck.png"
import Form from "react-bootstrap"

export default function Contact() {
  return (
    <div className="container">
      <div className="contact-outer-box">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-text">
          <div className="row">
            <div className="col-md-6">
              <span className="span-design">So Simple, </span>
              <br/>
              <span className="span-design"> So Powerful!</span>
              <br/>
              <span className="span-2-design">
                Got a question? We are here to help! 
                <br/>Fill up the form to get in
                touch with us on
                <br/>your enquiries.
              </span>
            </div>
            <div className="col-md-6">
              <h2 className="contact-form">CONTACT US</h2>
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-inputs">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-inputs">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-inputs">
                  <textarea
                    className="form-control"
                    type="textarea"
                    name="message"
                    id="message"
                    maxLength="1000"
                    rows="10"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="">
                  <button type="submit" className="from-submit">
                    Send
                  </button>
                </div>
              </form>
              
            </div>
            
          </div>
          <img
                className="truck-image"
                src={truck}
                alt="truck"
                variant="dark"
              />
        </div>
      </div>
    </div>
  )
}
