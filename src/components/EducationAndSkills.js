import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faPython } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export class EducationAndSkills extends Component {
    render() {
        return (<div>
            <h1 style={{ color: "#000", fontWeight: "400" }} className="mt-4">EDUCATION</h1>
            <div className="row">
                <div className="col-10 mt-3" style={{ fontSize: "18px" }}>
                    <ul style={{ listStyle: "none" }}>
                        <li>
                            <div className="row" style={{ display: "flex", alignItems: "center"}}>
                                <FontAwesomeIcon icon={faCode} style={{ display: "flex" ,fontSize: "64px", color: "#04b4e0" }} className="col-1 invisible" />
                                <div className="col-8">Currently pursuing my <strong style={{ color: "#04B4E0" }}>Bachelor of Technology in Computer Science & Engineering,
                                with ongoing CGPA of 7.7</strong> from Bhagwan Parshuram Institute of Technology <strong>affiliated by Guru Gobind Singh Indraprastha University, Delhi, India</strong> </div>
                                <div className="col-3 text-right font-weight-lighter"><i>June 2017 - June 2021</i></div>
                            </div>
                        </li>
                        <li>
                            <div className="row mt-3" style={{ display: "flex", alignItems: "center" }}>
                                <FontAwesomeIcon icon={"graduation-cap"} style={{ fontSize: "64px", color: "#04b4e0" }} className="col-1 invisible" />
                                <div className="col-8">
                                    Passed <strong style={{ color: "#04B4E0" }}>Senior Secondary Examination (12th) with 94.5%</strong> from Little Fairy Public School 
                                    <strong> affiliated by Central Board of Secondary Education</strong>, Hudson Lane Kingsway Camp, Delhi, India.</div>
                                    <div className="col-3 text-right font-weight-lighter"><i>April 2014 - June 2016</i></div>
                            </div>
                        </li>
                        <li>
                            <div className="row mt-3" style={{ display: "flex", alignItems:"center" }}>
                                <FontAwesomeIcon icon={"school"} style={{ fontSize: "64px", color: "#04b4e0" }} className="col-1 invisible" />
                                <div className="col-8">
                                    Passed <strong style={{ color: "#04B4E0" }}>Higher Secondary Examination (10th) with 8.8 CGPA</strong> from Little Fairy Public School 
                                    <strong> affiliated by Central Board of Secondary Education</strong>, Hudson Lane Kingsway Camp, Delhi, India.</div>
                                    <div className="col-3 text-right font-weight-lighter"><i>April 2012 - April 2014</i></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default EducationAndSkills;