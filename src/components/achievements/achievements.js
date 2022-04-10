import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Achievements() 
{

  return(
    <div>
        

    <section id="achievements" classNameName = "ss-dark target-section">
    <div className="row heading-block heading-block--center"  style ={{"paddingTop":"70px"}}data-aos="fade-up">
    <div className="column large-full">
        <h2 className="section-heading section-heading--centerbottom" style={{"color":"white"}}>Achievements</h2>

        <p className="section-desc" style={{"color":"white" , "fontFamily":"Frank Ruhl Libre,serif"}}>
            Here Are Some Of My Key Achievements
        </p>
    </div>
</div>
                <section className="hero-section-1" data-aos = "fade-up">
                    <div className="cardAchieve-grid">
                        <a className="cardAchieve" href="https://devpost.com/software/nayak-community-help" target="_blank">
                            <div className="cardAchieve__background">
                                    <StaticImage  imgStyle = {{ borderRadius : "7%" }}src="../../assets/images/Achievements/Hack'21.png" alt=""/>
                            </div>
                            <div className="cardAchieve__content">
                                <p className="cardAchieve__category">Accolade</p>
                                <h3 className="cardAchieve__heading" style={{"fontFamily":"Montserrat, sans-serif", "fontWeight":"bold"}}>HackPrinceton 2021' Fall Overall Winner</h3>
                            </div>
                        </a>
                        <a className="cardAchieve" href="https://devpost.com/software/e-adalat" target="_blank">
                            <div className="cardAchieve__background" >
                            <StaticImage  imgStyle = {{ borderRadius : "7%" }}src="../../assets/images/Achievements/Hack'22.png" alt=""/>
                            </div>
                            <div className="cardAchieve__content">
                                <p className="cardAchieve__category">Accolade</p>
                                <h3 className="cardAchieve__heading" style={{"fontFamily":"Montserrat, sans-serif","fontWeight":"bold" }}>HackPrinceton 2022' Spring Best Design Overall</h3>
                            </div>
                        </a>
                        <a className="cardAchieve" href="https://www.youtube.com/watch?v=IHncdTUho1g" target="_blank">
                            <div className="cardAchieve__background">
                            <StaticImage  imgStyle = {{ borderRadius : "7%" }}src="../../assets/images/Achievements/HackMit.png" alt=""/>
                            </div>
                            <div className="cardAchieve__content">
                                <p className="cardAchieve__category">Accolade</p>
                                <h3 className="cardAchieve__heading" style={{"fontFamily":"Montserrat, sans-serif","fontWeight":"bold" }} >Top-10 HackMIT 2021 (Finalist) </h3>
                            </div>
                        </a>
                        <a className="cardAchieve" href="https://devpost.com/software/nayak-community-help" target="_blank">
                            <div className="cardAchieve__background">
                            <StaticImage  imgStyle = {{ borderRadius : "7%" }}src="../../assets/images/Achievements/Neo-Prize.png" alt=""/>
                            </div>
                            <div className="cardAchieve__content">
                                <p className="cardAchieve__category" style={{"fontWeight":"bold"}}>Sponsor Prize</p>
                                <h3 className="cardAchieve__heading" style={{"fontFamily":"Montserrat, sans-serif","fontWeight":"bold" }}>Winner Of Reinventing Social Network (By-Neo Sponsor-Prize)</h3>
                            </div>
                        </a>
                        
                        </div>
                    </section>

        </section>
    </div>
  )
}
