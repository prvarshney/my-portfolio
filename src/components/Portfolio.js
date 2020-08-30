import React, { Component } from 'react';

export class Portfolio extends Component {
    render() {
        return (<div id="portfolio" style={{ paddingLeft: (window.innerWidth < 1920) ? "36px" : "0" }}>
            {/* TITLE OF THE SECTION - MY PORTFOLIO */}
            <h2 style={{ color: "#000", fontWeight: "400" }} className="pt-5">MY PORTFOLIO</h2>
            <div className="mt-4">See my work below. Unless explicitly stated otherwise, <strong>all their back-end and front-end parts were completely done by me.</strong></div>
            {/* PORTFOLIO TIMELINE STARTS */}
            <div className="row">
                <div className="col-11 mt-4" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px" }}>
                    {/* TIMELINE SUB-SECTION STARTS */}
                    <div className="row">
                        <div className="col-2 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>Present</i></span>
                            <div 
                            style={{ boxSizing: "border-box", position: "absolute",
                                     top: "9px", right: "-4px" ,color: "#04b4e0",
                                      backgroundColor: "#04b4e0", width:"8px",
                                       height: "8px" }}>
                            </div>
                        </div>
                        <div className="col-10 text-left px-5">
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
                    <div className="row">
                        <div className="col-2 text-right" style={{ borderRight: "1px solid #dee2e6" }}>
                            <span style={{ color: "#999" }} className="mr-4"><i>June 2020 - Present</i></span>
                            <div className=""
                            style={{ boxSizing: "border-box", position: "absolute",
                                     top: "9px", right: "-4px" ,color: "#04b4e0",
                                      backgroundColor: "#04b4e0", width:"8px",
                                       height: "8px" }}>
                            </div>
                        </div>
                        <div className="col-5 text-left pb-4 pl-5">
                            <h2 style={{ color: "#04b4e0", fontWeight: "400" }} >WALKMAN</h2>
                            <i><strong>Walkman is an opensource and free music streaming and downloading application designed for Android, Linux, Windows and MacOS devices.</strong></i><br />
                            <ul className="mt-3" style={{ listStyle: "upper-roman" }}>
                                <li>Responsive desktop application for Windows, MacOS & Linux Operating System.</li>
                                <li>Mobile Application for Android.</li>
                            </ul>
                        </div>
                        <div className="col-5 text-left pb-4 pt-4">
                            {/* SECTION TO INSERT SCREENSHOT OF THE APPLICATION  */}
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