import React from "React"
import Logo from "../images/Logo.png"
import Fast from "../images/Fast and Scalable.png"
import Easy from "../images/Easy to integrate.png"
import Practical from "../images/Practical Features.png"
import '../styles/whyPage.css'

//import "../styles/whyPage.css"

export default function whyPage( {data}) {
  console.log(data)
  return (
    <div className="container">
      <div className="why" class="center">
        <h1 className="orange-text" >Why</h1>
        <img className="why-logo-image" src={Logo} alt="Logo"/>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="outBox">
            <div className="box">
              <img className="Fast" src={Fast} alt="Fast"></img>
              <span className="span-design"> Fast And Scalable </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="outBox">
            <div className="box">
              <img className="Easy" src={Easy} alt="Easy"></img>
              <span className="span-design"> Easy To Integrate </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="outBox">
            <div className="box">
              <img className="Practical" src={Practical} alt="Practical"></img>
              <span className="span-design"> Cost Efficient </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
