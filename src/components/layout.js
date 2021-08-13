import React from "react"
import { withPrefix, Link } from "gatsby"
import "./layout.css"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
export default function Layout({ children }) 
{
  let AOS;

    useEffect(() => {
      /**
       * Server-side rendering does not provide the 'document' object
       * therefore this import is required either in useEffect or componentDidMount as they
       * are exclusively executed on a client
       */
      const AOS = require("aos");
      AOS.init({
        once: true,
      });
    }, []);
  
    useEffect(() => {
      if (AOS) {
        AOS.refresh();
      }
    });

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
