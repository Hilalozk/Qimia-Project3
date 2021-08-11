import React from "react"
import Footerpic from "../images/Footer Logo.png"
import "../styles/footer.css"
export default function Footer(props) {
  return (
    <div className="container">
      <div class="row">
        <footer class="footer-class">
          <p>
            <img className="footer-logo" src={Footerpic} alt="Footer Logo" />

            <p class="copyright-text"> &copy; 2021 Copyright Qimia GmbH</p>
          </p>
        </footer>
      </div>
    </div>
  )
}
