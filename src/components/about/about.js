import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function AboutMe() 
{

  return(
    <div>
    <section id="about" className="s-about target-section">

<div className="about-me">

    <div className="row heading-block" data-aos="fade-up">
        <div className="column large-full">
            <h2 className="section-heading">About Me</h2>
        </div>
    </div>

    <div className="row about-me__content" data-aos="fade-up">
        <div className="column large-full about-me__text">
            <p className="lead">
            I am Shivam Dargan, Based in <span style={{color:"#CF1867",fontWeight:"bold"}}>New Delhi, India</span> And Have Been Living There Since I Was Born.<br/>
            I Am A <span style={{color:"#CF1867"}}><b>Full Stack Web Developer</b></span> And I Have Worked On Multiple Projects Using Multiple Technologies Like MERN, PERN Stacks. <br/>

            </p>

            <p>
            Constantly Pushing Myself To The Boundaries And Out Of My Comfort Zone, Striving To Better Myself <span style={{color:"#CF1867",fontWeight:"bold"}}>Every Day One Step At Time</span><br/>
            I Am a <span style={{color:"#CF1867",fontWeight:"bold"}}>Hard Working, Perseverant</span> Individual Fueled With Passion And Motivation. <br/>
            I Value Time Greatly And Thus, Meeting Deadlines While Still Producing Quality Work Is Something That Comes Natural To Me.
            </p>

            <p>
                <span style={{color:"#CF1867",fontWeight:"bold"}}>I</span> Enjoy Watching Motorsports, Particularly <span style={{color:"#CF1867", fontWeight:"bold"}}>Formula 1</span>, So If You Ever Want To Discuss  <span style={{color:"#CF1867", fontWeight:"bold"}}>F1</span> Hit Me Up ! <br/>
                <span style={{color:"#CF1867",fontWeight:"bold"}}>I Am A</span> Fitness Enthusiast And Enjoy Training Heavy And Pushing My Limits. <br/>
                <span style={{color:"#CF1867",fontWeight:"bold"}}>I Am A</span> Big Tech Geek, Always Looking Forward To Get Hands On The Lastest Gadgets That Release In The Market And To Share My Passion With The World, I Created A <a style={{color:"#CF1867", fontWeight:"bold"}} href="https://www.youtube.com/channel/UCNM3rM76Wwj8e9Evni26L7w">Youtube Channel</a> On Which I Used To Upload Unboxings And Reviews.
             
            </p>

            <span>
                
                <span style={{color:"#CF1867",fontWeight:"bold",fontSize:"29px"}}>S</span><span style={{color:"#CF1867",fontWeight:"bold"}}>ome</span> Of The Things That I Like To Do In My Free Time Are :<br/>
                <div style={{lineHeight:"1.0"}}>
                    <div className="hobbies"><StaticImage src="../../assets/images/guitar.svg" alt ="guitar"/></div>&nbsp; Playing Guitar
                </div>
                <br/>
                <div style={{lineHeight:"1.0"}}>
                    <div className="hobbies"><StaticImage src="../../assets/images/dumbell.png" alt="dumbell"/></div>&nbsp; Working Out
                </div>
                <br/>
                <div style={{lineHeight:"1.0"}}>
                    <div className="hobbies"><StaticImage src="../../assets/images/badminton.svg" alt="badminton"/></div>&nbsp; Playing Badminton
                </div>
                <br/>
                <div style={{lineHeight:"1.0"}}>
                    <div className="hobbies"><StaticImage src="../../assets/images/games.svg" alt="games"/></div>&nbsp; Playing Racing/Flight Simulators
                </div>
                <br/>
                <div style={{lineHeight:"1.0"}}>
                    <div className="hobbies"><StaticImage src="../../assets/images/car.svg" alt="car"/></div>&nbsp; Going Out For A Drive
                </div>
                <br/>

            </span>
        </div>
    </div>

    
       
    <div className="row about-me__buttons">
        <div className="column large-half tab-full" data-aos="fade-up">
            <a href="mailto:darganshivam2001@gmail.com?subject=Regarding Hiring/Collabration For A Project" className="btn btn--stroke full-width">Hire Me</a>
        </div>
        <div className="column large-half tab-full" data-aos="fade-up">
            <a href="\Shivam_Dargan_Resume.pdf" className="btn btn--primary full-width" download>
                Download CV
            </a>
        </div>
    </div>
</div> 

<div className="about-experience">

    <div className="row heading-block" data-aos="fade-up">
        <div className="column large-full">
            <h2 className="section-heading">Work & Education</h2>
        </div>
    </div>

    <div className="row about-experience__timeline">

        
        <div className="column large-half tab-full" data-aos="fade-up">
            <div className="timeline">

                <div className="timeline__icon-wrap">
                    <span className="timeline__icon timeline__icon--work"></span>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">July 2022 - September 2022</p>
                        <h3 className="item-title"> <span> <img class ="logoSize" src="https://wendor.b-cdn.net/wp-content/uploads/2020/01/web-logo.png" /> </span> <br/>Wendor</h3> 
                        <h5><span style={{color:"#CF1867"}}>Full Stack Developer Intern</span></h5>
                    </div>
                    <div className="timeline__desc">
                        <p> <b>Recharge Portal:</b> Built RFID/Other Categories Based Recharge Wallet Portal On Next With TS, Redux, And Nest With TS For Backend Endpoints. <br/> <br/>  <b>Integrated</b> Paytm Payment Gateway With Next Application, Verifying Checksum With PayTM. <br/> <br/> <b>Documented</b> The Wireframes, API Requests, DB Design, And Testing Along The Way. </p>
                    </div>
                </div>


                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">September 2020 - Present</p>
                        <h3 className="item-title"> <span> <StaticImage  class ="logoSize" src="../../assets/images/owaspLogo.png" /> </span> <br/> OWASP Student Chapter</h3> 
                        <h5><span style={{color:"#CF1867"}}>Joint Secretary</span></h5>
                    </div>
                    <div className="timeline__desc">
                        <p> <b>Technical Head:</b> Lead the Entire Technical Department during Various Events.<br/> <br/>  <b>Developed</b> Full Fledged Portals Based On React.js, Node.js, Express, And Mongoose That Served More Than 500+ Users Simultaneously. <br/> <br/> <b>Managed</b> A Technical Team Of More Than 40 People And Made Sure All The Deadlines Were Met While Still Ensuring Production Quality. <br></br> <br/> <b>Developed</b> Landing Page for Multiple Hackathons. </p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">September 2021 - April 2023</p>
                        <h3 className="item-title"> <span> <StaticImage class ="logoSize" src="../../assets/images/dsc1.png" /> </span> <br/> Google Developer Student Club</h3>
                        <h5><span style={{color:"#CF1867"}}>Core Member</span></h5>
                    </div>
                    <div className="timeline__desc">
                        <p><b>Web Development:</b> Worked On Multiple Full- Stack Projects Like OLX for Thapar, etc.<br/><br/><b>Video Editor:</b> Edited Some Videos For The Club's Official Insta Handle. <br/><br/> <b>Organized </b> Virtual Hubs For Events Like Hashcode, 30 Days Of Cloud, GSOC, etc.</p>
                    </div>
                </div>

                {/* <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">September 2020 - Present</p>
                        <h3 className="item-title">  <span> <StaticImage class ="logoSize" src="../../assets/images/adventureClub.png" /> </span> <br/> Thapar Adventure Club</h3>
                        <h5><span style={{color:"#CF1867"}}>Executive Team Member</span></h5>
                    </div>
                    <div className="timeline__desc">
                        <p><b>Video Editor:</b> Made Cinematic Videos Showcasing the highlights of Various Trips Published On The Club's Social Instagram Page <br/><br/><b>Incharge</b> Of Videography and Photography During Treks and Trips</p>
                    </div>
                </div> */}

               

            </div>
        </div>

        <div className="column large-half tab-full" data-aos="fade-up">
            <div className="timeline">

                <div className="timeline__icon-wrap">
                    <span className="timeline__icon timeline__icon--education"></span>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">September 2020 - August 2024</p>
                        <h3 className="item-title"><span> <StaticImage class ="logoSize" src ="../../assets/images/thapar.png" /> </span> <br/>Thapar Institute Of Engineering And Technology</h3>
                        <h5><span style={{color:"#CF1867"}}>Undergraduate Degree</span></h5>
                    </div>
                    <div className="timeline__desc">
                        <p><b>Pursuing </b>B.E In Computer Science And Business Systems Which Provides Courses With Diverse Fields From Deep Computer Fundamentals Like <b>A.I, ML, DSA,</b> Etc. To Business Fundamentals Like <b>Business Communication, Ententrepreneurship, I.P,</b> Etc.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">March 2018 - March 2021</p>
                        <h3 className="item-title"><span> <StaticImage class ="logoSize" src ="../../assets/images/smsLogo.png" /> </span> <br/>St. Marks Sr. Sec Public School Meera Bagh</h3>
                        <h5><span style={{color:"#CF1867"}}>12<sup>th</sup> Grade </span><br/><b>96%</b> Aggregate</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Pursued +2 (High School) In Science Stream Dealing With Subjects Like Physics, Chemistry, Maths, Computer Science, Etc.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">April 2008 - March 2018</p>
                        <h3 className="item-title"><span> <StaticImage class ="logoSize" src ="../../assets/images/smsLogo.png" /> </span> <br/> St. Marks Sr. Sec Public School Meera Bagh</h3>
                        <h5><span style={{color:"#CF1867"}}>10<sup>th</sup> Grade </span><br/><b>85%</b> Aggregate</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Studied All The Core And Fundamental Subjects (Till Junior High)  Like Mathematics, Social Studies, Science, Etc</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>

</section>  
    </div>
  )
}
