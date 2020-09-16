import React, { Component } from 'react'
import WalkmanHomeScreen from '../assets/img/walkman-home-screen.jpg'
import BPITNoticeBotScreen from '../assets/img/bpit-notice-bot-screen.png'
import TerminalScreens from '../assets/img/terminal-screens.jpg'

export class Portfolio extends Component {
    render() {
        return (
        <div id="portfolio" className="container m-lg-0 p-lg-0">
            {/* TITLE OF THE SECTION - MY PORTFOLIO */}
            <h2 style={{ color: "#000", fontWeight: "400" }} className="pt-5 text-center text-md-left">MY PORTFOLIO</h2>
            <div className="mt-4 text-justify">See my work below. Unless explicitly stated otherwise, <strong>all their back-end and front-end parts were completely done by me.</strong></div>
            {/* PORTFOLIO TIMELINE STARTS */}
            <div className="row">
                <div className="col-12 col-lg-11 mt-4" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px" }}>
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row">
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="d-none mr-0">Present</span>
                            <div className="mt-3"
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-10 pl-4 pl-md-5 text-justify">
                            <i><strong>Currently open to co-operation on new and existing projects as a full time employee or a freelancer.</strong></i><br />
                            Are you Looking for a <strong>Software Development Engineer </strong> who possess sound knowledge of Data Structures & Algorithm Design and Analysis, a Full Stack Developer, or just a Front-End or Back-End Developer, willing to join your team/firm?<br />
                            Contact me. I will answer you as soon as possible.
                            <div className="my-4 border-bottom"></div>
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row" >
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="d-none mr-0"><i>2020 - Present</i></span>
                            <div className="mt-3"
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-10 pl-4 pl-md-5" >
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h2 className="mb-3" style={{ color: "#04b4e0", fontWeight: "400", textTransform: "uppercase" }} >Walkman</h2>
                                    <strong className="text-justify">Walkman is an opensource streaming and downloading application designed for Android, Linux, Windows and MacOS devices.</strong><br />
                                    <div className="font-italic mt-3">Technical wrap-up :</div>
                                    <ul className="mt-3 ml-0 pl-0">
                                        <li className="mt-1">Responsive desktop application for Windows, MacOS & Linux Operating System (Built using Electronjs, Javascript & Python3).</li>
                                        <li className="mt-1">A Native Mobile Application for Android 5.0+(Lollipop). </li>
                                        <li className="mt-1">Database is built over MySQL database</li>
                                        <li className="mt-1">Backend Server written down in Nodejs using Expressjs framework, which provides REST api to both, desktop and mobile application.</li>
                                        <li className="mt-1">Built over Model-View-Controller (MVC) Architecture.</li>
                                    </ul>
                                    <div className="my-4">
                                        <span className="d-block font-weight-light mb-2">TECHNOLOGIES</span>
                                        <div className="row justify-content-center justify-content-md-start">
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Reactjs</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">MySQL</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Java</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Nodejs</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Python3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 text-left pt-4 pl-md-5 pl-lg-4" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
                                    <img src={WalkmanHomeScreen} alt="walkman home screen mockup" style={{ height: "auto", width: "100%" }} />
                                </div>
                            </div>
                            <div className="row pl-4 pl-md-5 pl-4 my-4">
                                <div className="col border-bottom"></div>
                            </div>
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row" >
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="d-none mr-0"><i>2020 - Present</i></span>
                            <div className="mt-3"
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-10 pl-4 pl-md-5" >
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h2 className="mb-3" style={{ color: "#04b4e0", fontWeight: "400", textTransform: "uppercase" }} >Terminal</h2>
                                    <strong className="text-justify">Walkman is an opensource streaming and downloading application designed for Android, Linux, Windows and MacOS devices.</strong><br />
                                    <div className="font-italic mt-3">Technical wrap-up :</div>
                                    <ul className="mt-3 ml-0 pl-0">
                                        <li className="mt-1">A Native Mobile Application for Android 5.0+(Lollipop). </li>
                                        <li className="mt-1">Database is built over MongoDB database</li>
                                        <li className="mt-1">Backend Server written down in Python3 using Flask framework, which provides REST api to mobile application.</li>
                                        <li className="mt-1">Built over Model-View-Controller (MVC) Architecture.</li>
                                    </ul>
                                    <div className="my-4">
                                        <span className="d-block font-weight-light mb-2">TECHNOLOGIES</span>
                                        <div className="row justify-content-center justify-content-md-start">
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Java</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Android</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">MongoDB</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">ReactJS</span>
                                            <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white m-1">Python3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 text-left pt-4 pl-md-5 pl-lg-4" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
                                    <img src={TerminalScreens} alt="walkman home screen mockup" style={{ height: "auto", width: "100%" }} />
                                </div>
                            </div>
                            {/* <div className="row pl-4 pl-md-5 pl-4 my-4">
                                <div className="col border-bottom"></div>
                            </div> */}
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                </div>
            </div>
            {/* PORTFOLIO TIMELINE ENDS */}
        </div>);
    }
}

export default Portfolio;