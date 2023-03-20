import React from "react"

export default function Contact() 
{

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
            <a style={{textAlign:"center"}}href="mailto:sdargan_be20@thapar.edu">sdargan_be20@thapar.edu</a>
        </p>

        <p className="section-desc">
        I'm happy to connect, listen and help. Let's work together and build
        something awesome. Let's turn your idea to an even greater product!
        <a href="mailto:sdargan_be20@thapar.edu"> &nbsp; Email Me</a>.
        </p>
    </div>
</div>

<div className="row contact-infos" data-aos="fade-up" data-aos-anchor=".contact-main">

    <div className="column large-5 medium-full contact-phone">
        <h4>Call Me</h4>
        <a href="tel:9718184888">+91 9718-184-888</a>
    </div>

    <div className="column large-7 medium-full contact-social">
        <h4>Social</h4>
        <ul>
            <li><a target="_blank" href="https://github.com/shivamdargan" title="Github">Github</a></li>
            <li><a  target="_blank" href="https://www.linkedin.com/in/shivam-dargan/" title="Instagram">Linkedin</a></li>
            <li><a  target="_blank" href="https://www.instagram.com/shivamdargan/" title="Instagram">Instagram</a></li>
        </ul>
    </div>

</div> 

</section>
    </div>
  )
}
