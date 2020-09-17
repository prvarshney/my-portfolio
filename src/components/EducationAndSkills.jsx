import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export class EducationAndSkills extends Component {
    render() {
        return (
        <div className="container-fluid ml-lg-0 pl-lg-0" id="education-and-skills">
            {/* EDUCATION SECTION */}
            <h2 style={{ color: "#000", fontWeight: "400" }} className="pt-4 text-center text-md-left">EDUCATION</h2>
            <div className="row">
                <div className="col-12 col-lg-10 mt-0 pb-3 border-bottom mb-4" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px" }}>
                    <div className="row">
                        <div className="col-12">
                            <ul style={{ listStyleType: "upper-roman" }} className="m-4 p-0">
                                <li>
                                    <div className="row" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="col-12 col-md-9 text-justify">
                                            Currently pursuing my <strong style={{ color: "#04B4E0" }}>
                                            Bachelor of Technology in Computer Science & Engineering,
                                            with ongoing CGPA of 7.9</strong> from Bhagwan Parshuram 
                                            Institute of Technology <i>affiliated by Guru Gobind 
                                            Singh Indraprastha University, Delhi, India</i>
                                        </div>
                                        <div className="col-12 col-md-3 text-center text-md-right font-weight-lighter"><i>June 2017 - June 2021</i></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row mt-3" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="col-12 col-md-9 text-justify">
                                            Passed <strong style={{ color: "#04B4E0" }}>Senior Secondary Examination (12<sup>th</sup>) with 94.5% </strong> 
                                            from Little Fairy Public School
                                            <i> affiliated by Central Board of Secondary Education</i>, Hudson Lane Kingsway Camp, Delhi, India.
                                        </div>
                                        <div className="col-12 col-md-3 text-center text-md-right font-weight-lighter"><i>April 2014 - June 2016</i></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row mt-3" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="col-12 col-md-9 text-justify">
                                            Passed <strong style={{ color: "#04B4E0" }}>Higher Secondary Examination (10<sup>th</sup>) with 8.8 CGPA </strong> 
                                            from Little Fairy Public School
                                            <i> affiliated by Central Board of Secondary Education</i>, Hudson Lane Kingsway Camp, Delhi, India.
                                        </div>
                                        <div className="col-12 col-md-3 text-center text-md-right font-weight-lighter"><i>April 2012 - April 2014</i></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* TECHNICAL SKILL SECTION START */}
            <h2 style={{ color: "#000", fontWeight: "400" }} className="text-center text-md-left" >TECHNICAL SKILLS</h2>
            <div className="row mt-3" >
                <div className="col-12 col-lg-10 border-bottom pb-4" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px" }}>
                    <div className="text-justify">
                        As I <strong>started to work as a freelance software developer</strong> from the very second year of my Engineering 
                        with many startups and medium sized firms my skillset is not limited to a particular domain, <i>
                        I have served them in variety of domains like Front-End Engineering, 
                         Back-End Engineering, Mobile Application Engineering, 
                        Web Scrapping, Automation, Internet of Things(IoT), UI/UX Designing, Graphic Designing</i> and many more.
                    </div>
                    <div className="my-4 ml-md-2 row justify-content-center justify-content-md-start" style={{ color: "#04B4E0", fontSize: (window.innerWidth < 1920) ? "54px" : "64px", display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon icon={faHtml5} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "react"]} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "css3"]} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "node-js"]} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "node"]} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "java"]} className="m-2" />
                        <FontAwesomeIcon icon={["fab", "python"]} className="m-2" />
                    </div>
                    {/* FRONT-END ENGINEERING */}
                    <div className="mt-5 ml-0">
                        <h2 style={{ color: "#04b4e0", fontWeight: "400" }} >FRONT-END ENGINEERING</h2>
                        <div className="mt-3 text-justify">
                            <strong>I specialize in application development in both React and Vanilla Javascript. </strong> 
                            I have maintained, developed and launched multiple front-end development projects completely from scratch.
                            <span style={{ color: "#04b4e0" }}><strong> My current experience and skills in front-end includes: </strong></span>
                        </div>
                        <ul className="mt-3 text-justify">
                            <li>lead JavaScript development: bootstraping, refactoring, improving the structure, reliability; </li>
                            <li>full integration of front-end development using tools like Webpack with features like automatic code reload, 
                                code minifications, multiple environments support, automated testing and server-side rendering </li>
                            <li>good sense of design and UX, </li>
                            <li>huge experience in major JS ecosystems, by having used in the past many libraries like React, Redux, jQuery
                                 and many else. </li>
                        </ul>
                        <div className="d-none row px-0 px-md-5 mx-0 mx-4">
                            <div className="col-12 col-md-6 px-0 px-md-5 text-center">
                                <div style={{ color: "#04b4e0", fontSize: (window.innerWidth < 1920) ? '42px' : '52px' }}><strong>8</strong></div>
                                <div style={{ color: "#04b4e0", fontSize: (window.innerWidth < 1920) ? '19px' : '24px', lineHeight: (window.innerWidth < 1920) ? '24px' : '32px' }}>
                                    Single Page Applications launched in ReactJS or Vanilla JavaScript
                                </div>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-5 text-center">
                                <div style={{ color: "#04b4e0", fontSize: (window.innerWidth < 1920) ? '42px' : '52px' }}><strong>2</strong></div>
                                <div style={{ color: "#04b4e0", fontSize: (window.innerWidth < 1920) ? '19px' : '24px', lineHeight: (window.innerWidth < 1920) ? '24px' : '32px' }}>
                                    Talks given about Front-End Development
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BACK-END ENGINEERING */}
                    <div className="mt-5 ml-0">
                        <h2 style={{ color: "#04b4e0", fontWeight: "400" }} >BACK-END ENGINEERING</h2>
                        <div className="mt-3 text-justify"><strong>In back-end development, my current stack involves 
                            NodeJS with ExpressJS Framework,</strong> and alternatively 
                            <span style={{ color: "#04B4E0" }}> Python with Flask Framework. </span>
                            <br />
                            Nearly every app I have launched in the past had the back-end done also by me. In order to improve the development 
                            speed, performance and reliability, I have changed languages and frameworks already multiple times, from PHP to 
                            NodeJS; and configured servers using just the shell. The lessons I learned while doing all these apps will be 
                            useful for me forever, no matter what framework I will use in the next project.
                            <span style={{ color: "#04B4E0" }}><strong> What I can do for you at that side is: </strong></span>
                        </div>
                        <ul className="mt-3 text-justify">
                            <li>lead development of backends in <span style={{ color: "#04B4E0" }}>NodeJS/Python</span>, </li>
                            <li>using different types of databases (like <span style={{ color: "#04B4E0" }}>MongoDB</span>, 
                            <span style={{ color: "#04B4E0" }}> MySQL</span>), </li>
                            <li>writing unit & module tests </li>
                            <li>refactoring existing applications, by improving code readibility, 
                                separating logics into separate modules. </li>
                        </ul>
                    </div>
                    {/* OTHER */}
                    <div className="mt-5 ml-0">
                        <h2 style={{ color: "#04b4e0", fontWeight: "400" }} >DESIGN, UI, PROJECT LEADERSHIP</h2>
                        <div className="mt-3 text-justify"><strong>During the course of time, I have created and released tens of web applications. </strong>
                         Thus, not only I have coded their back-end and front-end codebases, but often I also had to care about other things needed in a successful web application project like:
                        </div>
                        <ul className="mt-3 text-justify">
                            <li>good planning & designing of UI using Adobe XD and thinking how it affects the UX; </li>
                            <li>consistency in design and typography; </li>
                            <li>Search Engine Optimization; </li>
                            <li>launching, deployment and monitoring the app after the release; </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default EducationAndSkills;