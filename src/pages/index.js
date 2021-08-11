import React from "react"
import Layout from "../hoc/Layout"
import "../styles/index.css"
import Path from "../images/Path.png"
import Laptop from "../images/Promo Mockup.png"
import Why from "../components/whyPage"
import Features from "../components/featuresPage"
import Product from "../components/productPage"
import Contact from "../components/contactPage"
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Index() {
  return (
    <Layout>
      <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <h1 class="header-1"> Powerful Logistics Platform!</h1>
          <h4 class="header-4"> QLogistics is the next generation logistics platform.</h4>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <img className="laptop" src={Laptop} alt="Laptop" />
          <iframe className="video" frameborder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Youtube"  src="https://www.youtube.com/watch?v=9mdQPy26hGM" id="laptop"></iframe>
        </div>
      </div>
      </div>
      <img className="path-image" src={Path} alt="Path Image" />
      <Why />
      <Features />
      <Product />
      <Contact />
    </Layout>
  )
}