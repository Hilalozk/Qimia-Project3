import React from "react"
import Header from "../hoc/Header"
import Footer from "../hoc/Footer"
import "../styles/Layout.css"
import Why from "../components/whyPage"
import Features from "../components/featuresPage"
import Product from "../components/productPage"
import Contact from "../components/contactPage"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

{
  /* 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
*/
}
