import React from "react"
import AOS from 'aos';

export default function AboutMe() 
{
  AOS.init();
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
            Nulla aspernatur nam et accusantium. Tempore delectus dignissimos aut
            ab commodi. Labore et cupiditate temporibus odio debitis eaque. 
            Officia provident aut iste et dicta perferendis. Velit iure adipisci. 
            Molestiae qui fuga rerum facilis.
            </p>

            <p>
            Reprehenderit quia id facilis nihil odit perferendis fugiat quidem voluptas. 
            Non ratione tenetur. Quis earum quia deleniti fugit fugiat minus omnis. 
            Iure dolore dolorum. Aspernatur quos cumque ea dolorum nemo nihil 
            beatae magnam. Qui molestiae rem. Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate 
            repellendus. Et modi ipsum aut harum. Ratione alias.
            </p>

            <p>
            Rerum consequatur dolore quae.
            Qui excepturi facilis quam quae quasi. Mollitia occaecati minus voluptas veniam.
            Qui excepturi facilis quam quae quasi. Mollitia occaecati minus voluptas veniam. Est est occaecati dolor 
            qui aut et eum. Aspernatur quos cumque ea dolorum nemo nihil 
            beatae magnam. Qui molestiae rem.
            </p>

            <p>
            Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate 
            repellendus. Et modi ipsum aut harum. Ratione alias sed. Rerum 
            consequatur dolore quae. Qui excepturi facilis quam quae quasi. 
            Mollitia occaecati minus voluptas veniam. Est est occaecati dolor 
            qui aut et eum. Aspernatur quos cumque ea dolorum nemo nihil 
            beatae magnam. Qui molestiae rem. Aspernatur quos cumque ea dolorum 
            nemo nihil. Qui molestiae rem.
            </p>
        </div>
    </div>

    <div className="row about-me__buttons">
        <div className="column large-half tab-full" data-aos="fade-up">
            <a href="#0" className="btn btn--stroke full-width">Hire Me</a>
        </div>
        <div className="column large-half tab-full" data-aos="fade-up">
            <a href="#0" className="btn btn--primary full-width">Download CV</a>
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
                        <p className="timeline__timeframe">July 2018 - Present</p>
                        <h3 className="item-title">Awesome Studio</h3>
                        <h5>Lead Designer</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">July 2017 - June 2018</p>
                        <h3 className="item-title">Super Cool Agency</h3>
                        <h5>Frontend Developer</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">March 2016 - June 2017</p>
                        <h3 className="item-title">Epic Design Studio</h3>
                        <h5>Frontend Developer</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </div>
                </div>

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
                        <p className="timeline__timeframe">July 2011 - June 2015</p>
                        <h3 className="item-title">University of Life</h3>
                        <h5>Master Degree</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">July 2009 - June 2011</p>
                        <h3 className="item-title">State Design University</h3>
                        <h5>Bachelor Degree</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </div>
                </div>

                <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">July 2005 - June 2009</p>
                        <h3 className="item-title">School of Hard Knocks</h3>
                        <h5>Bachelor Degree</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
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
