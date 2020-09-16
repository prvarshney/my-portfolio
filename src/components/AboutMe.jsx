import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export class AboutMe extends Component {
    render() {
        return (
        <div id="aboutme" className="container m-lg-0 p-lg-0">
            <h2 style={{ color: "#000", fontWeight: "400" }} className="pt-5 text-center text-md-left">ABOUT ME</h2>
            <div className="row">
                <div className="col-12 col-lg-10 mt-3" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px"}}>
                    <div className="text-justify"> 
                        Hi, I am Prashant, an enthusiastic, result oriented and hardworking <strong>professional with expertise in scalable
                        application development (mainly Android & Full Stack Web Applications) & enhancement</strong>. I specialize
                        in Java and have professional experience working with JavaScript, Python, NodeJS, ReactJS and all the other various frameworks, libraries and technologies related to them.
                    </div>
                    <div className="container" style={{ color: "#04B4E0" ,fontSize: (window.innerWidth < 1920) ? "54px" : "64px" }}>
                        <div className="row mt-2 justify-content-center justify-content-md-start">
                            <FontAwesomeIcon icon={["fab", "java"]} className="m-2" />
                            <FontAwesomeIcon icon={["fab", "python"]} className="m-2" />
                            <FontAwesomeIcon icon={["fab", "react"]} className="m-2" />
                            <FontAwesomeIcon icon={["fab", "node-js"]} className="m-2"/>    
                        
                            <FontAwesomeIcon icon={["fab", "node"]} className="m-2"/>
                            <FontAwesomeIcon icon={["fab", "html5"]} className="m-2"/>
                            <FontAwesomeIcon icon={["fab", "css3"]} className="m-2"/>
                        </div>
                    </div>
                    <div className="mt-4 text-justify">
                        I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
                        <strong style={{ color: "#04B4E0" }}> I can help you with all the sides of your project like:</strong>
                    </div>
                    <ul className="mt-3">
                        <li>developing scalable & maintainable web/mobile application for project,</li>
                        <li>leading/co-developing the back-end and front-end,</li>
                        <li>researching possible techs,</li>
                        <li>designing, developing & analyzing best data structure and algorithm for project,</li>
                        <li>developing bots & scripts to automate monotonous task</li>
                        <li>developing various Internet of Things(IoT) projects</li>
                        <li>designing UI/UX of a web/mobile application.</li>
                    </ul>
                    <div className="border-bottom pb-5"><i>You can use me as Swiss Army Knife in terms of softwares :-)</i></div>
                </div>
            </div>
        </div>);
    }
}

export default AboutMe;