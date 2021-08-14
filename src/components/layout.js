import React from "react"
import "./layout.css"
import { withPrefix } from "gatsby-link"
import { useEffect } from "react"
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
      {children}
      </div>
  )
}
