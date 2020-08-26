import React, { Component } from 'react';
import QRCode from '../assets/svg/Prashant_Varshney.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faPython } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export class AboutMe extends Component {
    render() {
        return (<div >
            <h1 style={{ color: "#000", fontWeight: "400" }} className="mt-5">ABOUT ME</h1>
            <div className="row">
                <div className="col-10 mt-3" style={{ fontSize: "18px" }}>
                    Hi, I am Prashant, an enthusiastic, hardworking and result-oriented <strong>professional with expertise in scalable
                    application development (mainly Android & Full Stack Web Applications) & enhancement</strong>. I specialize
                    in Java and have professional experience working with JavaScript, Python, NodeJS, ReactJS and all the other various frameworks, libraries and technologies related to them.
                    <div className="mt-4" style={{ color: "#04B4E0" ,fontSize: "64px", display:"flex" , alignItems:"center" }}>
                        <FontAwesomeIcon icon={["fab", "java"]} />
                        <FontAwesomeIcon icon={["fab", "python"]} className="ml-4" />
                        <FontAwesomeIcon icon={["fab", "react"]} className="ml-4" />
                        <FontAwesomeIcon icon={["fab", "node-js"]} className="ml-4"/>
                        <FontAwesomeIcon icon={["fab", "node"]} className="ml-4"/>
                        <FontAwesomeIcon icon={["fab", "html5"]} className="ml-4"/>
                        <FontAwesomeIcon icon={["fab", "css3"]} className="ml-4"/>
                    </div>
                    <div style={{ fontSize: "18px" }} className="mt-4">I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
                    <strong style={{ color: "#04B4E0" }}> I can help you with all the sides of your project like:</strong></div>
                    <ul style={{ fontSize: "18px" }} className="mt-3">
                        <li>developing scalable & maintainable Android Application for project,</li>
                        <li>leading/co-developing the back-end and front-end,</li>
                        <li>researching possible techs,</li>
                        <li>designing, developing & analyzing best data structure and algorithm for project,</li>
                        <li>developing bots & scripts to automate monotonous task</li>
                        <li>developing various Internet of Things(IoT) projects</li>
                    </ul>
                    <span className="pb-5 border-bottom d-block" style={{  }}><i>You can use me as Swiss Army Knife in terms of softwares :-)</i></span>
                </div>
                <div className="text-center d-none" > 
                    <img src={ QRCode } height="250px" width="250px" className="d-inline-block" style={{ marginTop: "-60px" }} />
                </div>
            </div>
        </div>);
    }
}

export default AboutMe;