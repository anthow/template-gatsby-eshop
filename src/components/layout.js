import React from 'react'
import Header from './header'
import Footer from './footer'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'

function Layout({ children }) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          company
          companyWebsite
        }
      }
    }
  `)
  return (
    <>
      <div className="site min-h-screen flex flex-col ">
          <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer metaData={data.site.siteMetadata} />
      </div>
    </>
  )
}
export default Layout
