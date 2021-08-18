import { StaticImage } from "gatsby-plugin-image"
import React from "react"
export default function Header() 
{
  return(
    <div>
            <header id="top" className="s-header">

<div className="header-logo">
    <a className="site-logo smoothscroll" href="#intro">
        <StaticImage src="../../assets/images/nameLogo.png" alt="Homepage"/>
    </a>
</div>

<nav className="header-nav-wrap">
    <ul className="header-main-nav">
        <li className="current"><a className="smoothscroll" href="#intro" title="intro">Intro</a></li>
        <li><a className="smoothscroll" href="#about" title="about">About</a></li>
        <li><a className="smoothscroll" href="#services" title="services">Skills</a></li>
        <li><a className="smoothscroll" href="#works" title="works">Projects</a></li>
        <li><a className="smoothscroll" href="#contact" title="contact us">Contact Me</a></li>	
    </ul>

    <ul className="header-social">
        <li><a target="_blank" href="https://www.youtube.com/c/ShivamDargan/videos"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://www.instagram.com/shivamdargan/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://www.facebook.com/shivam.dargan.cool"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/shivam-dargan/"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://github.com/shivamdargan"><i className="fab fa-github" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://twitter.com/ShivamDargan"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
    </ul>
</nav>

<a className="header-menu-toggle" href="#"><span>Menu</span></a>

</header> 
    </div>
  )
}
