import React from "react"
import AOS from 'aos';

export default function Contact() 
{
  AOS.init();
  return(
    <div>
   <section id="contact" className="s-contact ss-dark target-section">

<div className="row heading-block" data-aos="fade-up">
    <div className="column large-full">
        <h2 className="section-heading">Get In Touch</h2>
    </div>
</div>

<div className="row contact-main" data-aos="fade-up">
    <div className="column large-full">
        <p className="contact-email">
            <a style={{textAlign:"center"}}href="mailto:shivamdargan@gmail.com">shivamdargan@gmail.com</a>
        </p>

        <p className="section-desc">
        I'm happy to connect, listen and help. Let's work together and build
        something awesome. Let's turn your idea to an even greater product.
        <a href="mailto:#0">Email Me</a>.
        </p>
    </div>
</div>

<div className="row contact-infos" data-aos="fade-up" data-aos-anchor=".contact-main">

    <div className="column large-5 medium-full contact-phone">
        <h4>Call Me</h4>
        <a href="tel:197-543-2345">+197 543 2345</a>
    </div>

    <div className="column large-7 medium-full contact-social">
        <h4>Social</h4>
        <ul>
            <li><a href="#0" title="Facebook">Facebook</a></li>
            <li><a href="#0" title="Twitter">Twitter</a></li>
            <li><a href="#0" title="Instagram">Instagram</a></li>
        </ul>
    </div>

</div> 

</section>
    </div>
  )
}
