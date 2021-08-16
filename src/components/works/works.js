import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import ctf from "../../../static/CTF.jpg"
import coviRes from "../../../static/covi-res.jpg"
import Register from "../../../static/Register.jpg"
export default function Works() 
{
  return(
    <div>
         <section id="works" className="s-works target-section">

<div className="row heading-block heading-block--center" data-aos="fade-up">
    <div className="column large-full">
        <h2 className="section-heading section-heading--centerbottom">Selected Works</h2>
        <p className="section-desc">
            Here are some of my selected works I have done lately. Feel free to 
            check them out.
        </p>
    </div>
</div> 

<div className="masonry-wrap">

    <div className="masonry">
        <div className="grid-sizer"></div>

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                <div className="item-folio__thumb">
                    <a href={ctf} className="thumb-link" title="CTF Portal" data-size="2000x1600">
                        <StaticImage src="../../assets/images/portfolio/ctfCollage.png"
                              alt=""/>
                    </a>    
                    <a href="https://drive.google.com/file/d/16PqOoQ90dFClw8INbkP-I5lT8X8FUScr/view?usp=sharing" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>

                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Capture The Flag (CTF) Portal
                    </h4>
                    <p className="item-folio__cat">
                        Marvel Themed
                    </p>
                    <br/>
                    <b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js | Mongo DB</span>
                </div>

                <div className="item-folio__caption">
                    <p>The Portal Carried A Marvel Theme With It Thus Having These Various Unique Features And Suspence Built Right Into It :<br/>
A) 6 Infinity Stones - Each Stone Carried A Unique Power With It, For Example, Power Stone Gave A User 5 Free Hints, Soul Stone Gave The Ability To A Team To Deduct 10% Of 
     Points Of A Team Of Their Choice From The Live Points LeaderBoard Unless If A Team Had Activated Reality Stone Which Made That Particular Team Hidden From The 
     LeaderBoard And Thus Invincible And So On...<br/>
B) The Stones Had To Be Earned By Solving All The Technical Marvel Themed Questions Of A Round In A Given Time Frame<br/>
C) A Secret Was Kept Just Until The End Known As The Snap i.e If A Team Has All The 6 Stones And Have Finished All The Rounds, A Gauntlet Would Have Appeared And By 
     Clicking It Would Subsequently Trigger A Snap And Immediately Make That Particular Team Win!<br/> <span style={{color:"#CF1867"}}> Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.<br/>Contact Me For Code Base</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                <div className="item-folio__thumb">
                    <a href={coviRes} className="thumb-link" title="Covid Resources" data-size="2000x1600">
                        <StaticImage src="../../assets/images/coviRes.png" 
                             alt=""/>
                    </a>
                    <a href="https://github.com/shivamdargan/Covid-Resources" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Covi Res
                    </h4>
                    <p className="item-folio__cat">
                        A State Of The Art Covid Resources Website
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js</span>
                </div>
                <div className="item-folio__caption">
                    <p>Covid Resources Website Which Provides The Latest Resources Verified By Your Selection Of Preferred City And Resource.<span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href={Register} className="thumb-link" title="Registration Portal" data-size="2000x1600">
                        <StaticImage src="../../assets/images/RegistrationPortal.png"
                             alt=""/>
                    </a>
                    <a href="https://jarvis.owasp.co.in/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Registration Portal
                    </h4>
                    <p className="item-folio__cat">
                       For A Technical Event
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js | Mongo DB</span>
                </div>
                <div className="item-folio__caption">
                <p>A Fully Fledged Registration Portal Based On MERN Stack For A Technical Event Capable Of Handling More Than 900+ Registrations. <span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                <div className="item-folio__thumb">
                    <a href="images/portfolio/gallery/g-shutterbug.jpg" className="thumb-link" title="Grow Green" data-size="1050x700">
                        <StaticImage src="../../assets/images/portfolio/shutterbug.jpg" 
                              alt=""/>
                    </a>
                    <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Shutterbug
                    </h4>
                    <p className="item-folio__cat">
                        Branding
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js | Mongo DB</span>
                </div>
                <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href="images/portfolio/gallery/g-lamp.jpg" className="thumb-link" title="Guitarist" data-size="1050x700">
                        <StaticImage src="../../assets/images/portfolio/lamp.jpg" 
                             alt=""/>
                    </a>
                    <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Lamp
                    </h4>
                    <p className="item-folio__cat">
                        Web Design
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js | Mongo DB</span>
                </div>
                <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href="images/portfolio/gallery/g-fuji.jpg" className="thumb-link" title="Palmeira" data-size="1050x700">
                        <StaticImage src="../../assets/images/portfolio/fuji.jpg"
                             alt=""/>
                    </a>
                    <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Fuji
                    </h4>
                    <p className="item-folio__cat">
                        Web Design
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>React.js | Express.js, Node.js | Mongo DB</span>
                </div>
                <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </div>
            </div>
        </div>

    </div> 

</div> 

</section>
    </div>
  )
}
