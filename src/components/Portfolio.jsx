import React, { Component } from 'react'
import WalkmanHomeScreen from '../assets/img/walkman-home-screen.png'
import BPITNoticeBotScreen from '../assets/img/bpit-notice-bot-screen.png'
import TerminalScreens from '../assets/img/terminal-screens.png'

export class Portfolio extends Component {
    render() {
        return (<div id="portfolio" style={{ paddingLeft: (window.innerWidth < 1920) ? "36px" : "0" }}>
            {/* TITLE OF THE SECTION - MY PORTFOLIO */}
            <h2 style={{ color: "#000", fontWeight: "400" }} className="pt-5">MY PORTFOLIO</h2>
            <div className="mt-4">See my work below. Unless explicitly stated otherwise, <strong>all their back-end and front-end parts were completely done by me.</strong></div>
            {/* PORTFOLIO TIMELINE STARTS */}
            <div className="row" style={{ overflow: "hidden" }}>
                <div className="col-11 mt-4" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px" }}>
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row">
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>Present</i></span>
                            <div
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-10 text-left pl-5">
                            <i><strong>Currently open to co-operation on new and existing projects as a full time employee or a freelancer.</strong></i><br />
                            Are you Looking for a <strong>Software Development Engineer </strong>
                            who possess sound knowledge of Data Structures & Algorithm Design and Analysis,
                            a Full Stack Developer,
                            or just a Front-End/Back-End Developer, willing to join your team/firm?<br />
                            Contact me. I will answer you as soon as possible.
                            <div className="my-4 border-bottom"></div>
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row" >
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>2020 - Present</i></span>
                            <div className=""
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-11" >
                            <div className="row">
                                <div className="col-6 text-left pl-5">
                                    <h2 className="mb-3" style={{ color: "#04b4e0", fontWeight: "400", textTransform: "uppercase" }} >Walkman</h2>
                                    <strong>Walkman is an opensource and free music streaming and downloading application designed for Android, Linux, Windows and MacOS devices.</strong><br />
                                    <div className="font-italic mt-3">Technical wrap-up :</div>
                                    <ul className="mt-3" >
                                        <li>Responsive desktop application for Windows, MacOS & Linux Operating System (Built using Electronjs, Javascript & Python3).</li>
                                        <li>A Native Mobile Application for Android 5.0+(Lollipop). </li>
                                        <li>Database is built over MySQL database</li>
                                        <li>Backend Server written down in Nodejs using Expressjs framework, which provides REST api to both, desktop and mobile application.</li>
                                        <li>Built over Model-View-Controller (MVC) Architecture.</li>
                                    </ul>
                                    <div className="my-4">
                                        <span className="d-block font-weight-light mb-2">TECHNOLOGIES</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white">Reactjs</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">MySQL</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Java</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Nodejs</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Python3</span>
                                    </div>
                                </div>
                                <div className="col-6 text-left pt-4 pl-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
                                    <img src={WalkmanHomeScreen} alt="walkman home screen mockup" style={{ height: "100", width: "auto" }} />
                                </div>
                            </div>
                            <div className="row pl-5 my-4">
                                <div className="col border-bottom"></div>
                            </div>
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row">
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>2019 - 2020</i></span>
                            <div className=""
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className="col-8 text-left pl-5">
                                    <h2 className="mb-3" style={{ color: "#04b4e0", fontWeight: "400", textTransform: "uppercase" }} >Artificially Intelligent Targeting System</h2>
                                    <strong>A fully fledged defense system designed for armed forces which detects terrorist infiltration like activities and automatically shoot them without any human involvement. </strong><br />
                                    <div className="font-italic mt-3">Technical wrap-up :</div>
                                    <ul className="mt-3" >
                                        <li>Uses OpenCV to detect human infiltration/detection.</li>
                                        <li>Uses arduino AtMega Microprocessor to direct servos & lasers.</li>
                                    </ul>
                                    <div className="mt-4">
                                        <span className="d-block font-weight-light mb-2">TECHNOLOGIES</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white">Internet of Things (IoT)</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">OpenCV</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Python3</span>
                                    </div>
                                </div>
                                <div className="col-4 d-none text-left pt-4 text-center" style={{ display: "flex", alignItems: "center" }}>
                                    {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
                                    <img src={BPITNoticeBotScreen} alt="" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            {/* CREATING BOUNDARY AT THE BOTTOM OF THE SECTION */}
                            <div className="row pl-5 my-4">
                                <div className="col border-bottom"></div>
                            </div>
                        </div>
                    </div>
                    {/* TIMELINE SUB-SECTION ENDS */}
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row">
                        <div className="col-1 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>2020 - Present</i></span>
                            <div className=""
                                style={{
                                    boxSizing: "border-box", position: "absolute",
                                    top: "9px", right: "-4px", color: "#04b4e0",
                                    backgroundColor: "#04b4e0", width: "8px",
                                    height: "8px"
                                }}>
                            </div>
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className="col-6 text-left pl-5">
                                    <h2 className="mb-3" style={{ color: "#04b4e0", fontWeight: "400", textTransform: "uppercase" }} >Terminal</h2>
                                    <strong>Walkman is an opensource and free music streaming and downloading application designed for Android, Linux, Windows and MacOS devices.</strong><br />
                                    <div className="font-italic mt-3">Technical wrap-up :</div>
                                    <ul className="mt-3" >
                                        <li>A Native Mobile Application for Android 5.0+(Lollipop). </li>
                                        <li>Database is built over MongoDB database</li>
                                        <li>Backend Server written down in Python3 using Flask framework, which provides REST api to mobile application.</li>
                                        <li>Built over Model-View-Controller (MVC) Architecture.</li>
                                    </ul>
                                    <div className="my-4">
                                        <span className="d-block font-weight-light mb-2">TECHNOLOGIES</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white">Reactjs</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">MySQL</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Java</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Nodejs</span>
                                        <span style={{ backgroundColor: "#04b4e0" }} className="p-2 text-white ml-2">Python3</span>
                                    </div>
                                </div>
                                <div className="col-6 text-left pt-4 pl-4 text-center">
                                    {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
                                    <img src={TerminalScreens} alt="walkman home screen mockup" style={{ height: "auto", width: "100%" }} />
                                </div>
                            </div>
                            <div className="row pl-5 mb-4">
                                {/* <div className="col border-bottom"></div> */}
                            </div>
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