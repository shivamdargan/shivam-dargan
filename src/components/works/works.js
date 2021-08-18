import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import ctf from "../../../static/CTF.jpg"
import coviRes from "../../../static/covi-res.jpg"
import Register from "../../../static/Registeration.jpg"
import TiffinGo from "../../../static/TiffinGo.jpg"
import owasp from "../../../static/Owasp.jpg"
import vaccine from "../../../static/vaccine.png"
import bill from "../../../static/bill.jpg"
import hack from "../../../static/hacko.jpg"
export default function Works() 
{
  return(
    <div>
         <section id="works" className="s-works target-section">

<div className="row heading-block heading-block--center" data-aos="fade-up">
    <div className="column large-full">
        <h2 className="section-heading section-heading--centerbottom">Selected Projects</h2>
        <p className="section-desc">
            Here Are Some Of My Selected Projects I Have Done Lately. Feel Free To 
            Check Them Out.
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
                        <StaticImage src="../../assets/images/ctfCollage.png"
                              alt=""/>
                    </a>    
                    <a href="https://drive.google.com/file/d/16PqOoQ90dFClw8INbkP-I5lT8X8FUScr/view?usp=sharing" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>

                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Full Fledged Capture The Flag (CTF) Portal
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
                    <a href={TiffinGo} className="thumb-link" title="Healthy Food Delivery Webiste" data-size="2000x1600">
                        <StaticImage src="../../assets/images/TiffinGo.png" 
                              alt=""/>
                    </a>
                    <a href="https://tiffingo.github.io/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        TiffinGo
                    </h4>
                    <p className="item-folio__cat">
                        A Healthy Food Delivery Service About Static Website
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>HTML5 | CSS | Javascript</span>
                </div>
                <div className="item-folio__caption">
                <p>A Static Website Presenting All The MSP'S Of The Unique Food Delivery System Articulately And The Requirement Of Such Service In A Short And Crisp Manner.<span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href={owasp} className="thumb-link" title="Technical Society Website" data-size="2000x1600">
                        <StaticImage src="../../assets/images/Owasp.png" 
                             alt=""/>
                    </a>
                    <a href="http://owasp.co.in/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        OWASP
                    </h4>
                    <p className="item-folio__cat">
                        Website Of A Technical Society In Thapar University
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>HTML5 | CSS | Javascript</span>
                </div>
                <div className="item-folio__caption">
                <p>A Static Website Presenting The Society's Past Events And Its Culture, Present Team <span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div> 

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href={hack} className="thumb-link" title="Hackathon Website" data-size="2000x1600">
                        <StaticImage src="../../assets/images/hackowasp.png"
                             alt=""/>
                    </a>
                    <a href="https://hackowasp.live/" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Landing Page
                    </h4>
                    <p className="item-folio__cat">
                        Hackathon Website
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>HTML5 | CSS | Javascript</span>
                </div>
                <div className="item-folio__caption">
                <p>Built Parts Of The Landing Page Of The Hackathon Webiste For A Technical Society <span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div>

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href={vaccine} className="thumb-link" title="Vaccine Slot Availability Tracker" data-size="596x637">
                        <StaticImage src="../../assets/images/VaccineTracker.png"
                             alt=""/>
                    </a>
                    <a href="https://github.com/shivamdargan/Vaccine-Slot-Availability" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Vaccine Slot Availability
                    </h4>
                    <p className="item-folio__cat">
                        Plays Alarm As Soon As Slots Free Up
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>Python 3 Notebook File </span>
                </div>
                <div className="item-folio__caption">
                <p>A Python Script That Makes Use Of The Cowin API And Fetches Slot According To The Filters Selected And Plays A Sound As Soon As The Availability Of That Particular Vaccine Is More Than 1. All Error Handling And Edge Cases Have Been Covered And Printed.<span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div>

        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                    
                <div className="item-folio__thumb">
                    <a href={bill} className="thumb-link" title="Billing And Inventory Management System" data-size="2000x1600">
                        <StaticImage src="../../assets/images/billing.png"
                             alt=""/>
                    </a>
                    <a href="https://github.com/shivamdargan/Billing-and-Inventory-Management" className="item-folio__project-link" title="Project link" target="_blank"></a>
                </div>
                <div className="item-folio__text">
                    <h4 className="item-folio__title">
                        Billing And Inventory
                    </h4>
                    <p className="item-folio__cat">
                        Management System
                    </p>
                    <br/><b>Tech Stack Used :</b> <span style={{color:"#CF1867"}}>C++ Using File Handling System </span>
                </div>
                <div className="item-folio__caption">
                <p>A Console-Based CPP Software Which Allows The Admin To Do Inventory management (Mantain Stock Of Each Product With Different Attributes Like Discount On That Item, Etc.). Allows An Employee To Do Product Billing . Thus, Each Section Having Access To A Particular Region According To The Level Of Permission. <span style={{color:"#CF1867"}}> <br/>Please Download The Image Using The Button On The Top Right Corner If It Is Not Clearly Visible.</span><br/>Corresponding Link For The Project Is Given At Project Tile.</p>
                </div>
            </div>
        </div>
    </div> 

</div> 

</section>
    </div>
  )
}
