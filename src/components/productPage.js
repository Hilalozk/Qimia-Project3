import React from "react"
import Multi from "../images/Group 2.png"
import Oval from "../images/Oval Copy 3.png"
import "../styles/productPage.css"
export default function productPage() {
  return (
    <div className="container">
    <div className="product-container">
      <h1 className="product-title">Product</h1>
      <p className="info-text">
        Easy to use dashboard supporting every step of delivery process.
      </p>
      <div>
      <div className="row">
      <div className="col-sm-8 md-8 lg-8">
          <img className="Multi" src={Multi} alt="Multi" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="product-row">
            <div className="oval">
              <img src={Oval} alt="Oval" />
            </div>
            <div>
              <p> Operator, Driver and Customer Interfaces</p>
            </div>
          </div>
          <div className="product-row">
            <div className="oval">
              <img src={Oval} alt="Oval" />
            </div>
            <div>
              <p> Realtime tracking of the delivery cars</p>
            </div>
          </div>
          <div className="product-row">
            <div className="oval">
              <img src={Oval} alt="Oval" />
            </div>
            <div>
              <p> Developed for IOS and Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
