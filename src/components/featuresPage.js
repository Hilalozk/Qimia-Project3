import React from 'react'
import "../styles/featuresPage.css"
import GroupCopy from "../images/Group Copy.png"
import GroupImg from "../images/Group.png"
import Optimization from "../images/optimization.png"
import Group7 from "../images/Group 7.png"
import Group11 from "../images/Group 11.png"
import Group21 from "../images/Group 21.png"
//import  from 'react-bootstrap/Form'

export default function Features() {
    return (
        <div className="container">
        <div className="features-container">
            <h1 className="features-title">Features</h1>
            <p className="features-info">There are lots of reasons to have QLogistics!</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="features-box">
                        <img className="features-img" src={GroupCopy} alt="Group Copy"/>
                        <span class="features-span-design">
                            Optimization of the Vehicle Routing domain
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box">
                        <img className="features-img" src={Optimization} alt="Optimization"/>
                        <span class="features-span-design">
                            Up to 30.000 tasks within minutes
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box">
                        <img  className="features-img" src={Group11} alt="Group11"/>
                        <span class="features-span-design">
                            Live Driver Tracking
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box">
                        <img className="features-img" src={Group7} alt="Group7"/>
                        <span class="features-span-design">
                            Handling Capacities, time windows, priorities
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box">
                        <img className="features-img" src={Group21} alt="Group21"/>
                        <span class="features-span-design">
                            Pickup and Delivery Problems (e.g. ride sharing)
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box">
                        <img  className="features-img" src={GroupImg} alt="GroupImg"/>
                        <span class="features-span-design">
                            Instant Address Changes
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}