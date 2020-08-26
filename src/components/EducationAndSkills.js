import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faPython } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export class EducationAndSkills extends Component {
    render() {
        return (<div>
            {/* EDUCATION SECTION */}
            <h1 style={{ color: "#000", fontWeight: "400" }} className="mt-4">EDUCATION</h1>
            <div className="row">
                <div className="col-10 mt-3" style={{ fontSize: "18px" }}>
                    <div className="row" style={{ display:"flex", alignItems:"center" }}>
                        <div className="col-1 text-center">
                            <div className=""><FontAwesomeIcon icon={"school"} style={{ fontSize: "62px", color: "#04B4E0" }} /></div>
                            <div className="mt-4"><FontAwesomeIcon icon={"swatchbook"} style={{ fontSize: "62px", color: "#04B4E0" }} /></div>
                        </div>
                        <ul style={{ listStyle: "none" }} className="col-10">
                            <li>
                                <div className="row" style={{ display: "flex", alignItems: "center"}}>
                                    <div className="col-9">Currently pursuing my <strong style={{ color: "#04B4E0" }}>Bachelor of Technology in Computer Science & Engineering,
                                    with ongoing CGPA of 7.7</strong> from Bhagwan Parshuram Institute of Technology <strong>affiliated by Guru Gobind Singh Indraprastha University, Delhi, India</strong> </div>
                                    <div className="col-3 text-right font-weight-lighter"><i>June 2017 - June 2021</i></div>
                                </div>
                            </li>
                            <li>
                                <div className="row mt-3" style={{ display: "flex", alignItems: "center" }}>
                                    <div className="col-9">
                                        Passed <strong style={{ color: "#04B4E0" }}>Senior Secondary Examination (12<sup>th</sup>) with 94.5%</strong> from Little Fairy Public School 
                                        <strong> affiliated by Central Board of Secondary Education</strong>, Hudson Lane Kingsway Camp, Delhi, India.</div>
                                        <div className="col-3 text-right font-weight-lighter"><i>April 2014 - June 2016</i></div>
                                </div>
                            </li>
                            <li>
                                <div className="row mt-3" style={{ display: "flex", alignItems:"center" }}>
                                    <div className="col-9">
                                        Passed <strong style={{ color: "#04B4E0" }}>Higher Secondary Examination (10<sup>th</sup>) with 8.8 CGPA</strong> from Little Fairy Public School 
                                        <strong> affiliated by Central Board of Secondary Education</strong>, Hudson Lane Kingsway Camp, Delhi, India.</div>
                                        <div className="col-3 text-right font-weight-lighter"><i>April 2012 - April 2014</i></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* TECHNICAL SKILL SECTION START */}
            <h1 style={{ color: "#000", fontWeight: "400" }} className="mt-4">TECHNICAL SKILLS</h1>
        </div>);
    }
}

export default EducationAndSkills;