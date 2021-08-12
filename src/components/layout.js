import React from "react"
import { withPrefix, Link } from "gatsby"
import "./layout.css"
import { Helmet } from "react-helmet"
export default function Layout({ children }) 
{
  return(
     <div>
      {/* <Helmet>
            <script src={withPrefix('../../static/main.js')} type="text/javascript" />
            <script src={withPrefix('../../scripts/modernizr.js')} type="text/javascript" />
            <script src={withPrefix('../../scripts/jquery-3.2.1.min.js')} type="text/javascript" />
            <script src={withPrefix('../../scripts/pace.min.js')} type="text/javascript" />
            <script src={withPrefix('../../scripts/plugins.js')} type="text/javascript" />
      </Helmet> */}
      {children}
      </div>
  )
}
