import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import DRDOCertificate from '../assets/img/drdo-paper-presentation-certificate.jpg'
import EvotechCertificate from '../assets/img/evotech-certificate.jpg'
import AcademicScholarsCertificate from '../assets/img/academic-scholars-certificate.jpg'
import ChessCertificate from '../assets/img/chess-competition.jpg'
import HackinitCertificate from '../assets/img/hackInit-certificate.jpg'
import HacktietCertificate from '../assets/img/hacktiet-certificate.jpg'
import HeritageMelaCertificate from '../assets/img/heritage-mela.jpg'
import MaitRoboRaceCertificate from '../assets/img/mait-roborace-certificate.jpg'
import ThacksCertificate from '../assets/img/thacks-certificate.jpg'
import SGVUCertificate from '../assets/img/SGVU-international-science-convention.jpg'
import BrainMentorsCertificate from '../assets/img/brain-mentors-ml.jpg'
import IISFCertificate from '../assets/img/IISF-participation-certificate.jpeg'
import HackCBSCertificate from '../assets/img/HackCBS- participation-certificate.jpg'


const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
}

var images = [
    { id: 1, src: DRDOCertificate, elementClassName: ""},
    { id: 2, src: ThacksCertificate, elementClassName: ""},
    { id: 3, src: EvotechCertificate, elementClassName: ""},
    { id: 4, src: HacktietCertificate, elementClassName: ""},
    { id: 5, src: MaitRoboRaceCertificate, elementClassName: ""},
    { id: 6, src: ChessCertificate, elementClassName: ""},
    { id: 7, src: AcademicScholarsCertificate, elementClassName: ""},
    { id: 8, src: SGVUCertificate, elementClassName: ""},
    { id: 9, src: HeritageMelaCertificate, elementClassName: ""},
    { id: 11, src: HackinitCertificate, elementClassName: "d-none"},
    { id: 10, src: IISFCertificate, elementClassName: ""},
  ];
  
  // Convert array to JSX images
  images = images.map(function(item) {
    return (
        <div>
            <img key={ item.id } src={ item.src } className={ item.elementClassName + " img-responsive img-thumbnail" } />
        </div>
  )});


export class Achievements extends Component {
    render() {
        return (
            <div id="achievements" className="container-fluid m-lg-0 p-lg-0">
                <h2 style={{ color: "#000", fontWeight: "400", textTransform: "uppercase" }} className="pt-5 text-center text-md-left">Achievements</h2>
                <div className="row">
                    <div className="col-12 col-lg-10 mt-3" style={{ fontSize: (window.innerWidth < 1920) ? "16px" : "18px"}}>
                        <div className="text-justify"> 
                            From the very first year of my Engineering, I am constantly active in various curricular as well as co-curricular activities. 
                            I have participated in many National and International Conferences, Hackathons, present many revolutionary ideas, research papers, 
                            technologies, softwares and contribute to the open-source community.
                            <b style={{ color: "#04B4E0" }}> Some of my achievements are as follow:</b>
                        </div>
                        <div className="mt-4"> 
                            <Masonry 
                            breakpointCols={breakpointColumnsObj} 
                            className="my-masonry-grid justify-content-center"
                            columnClassName="my-masonry-grid_column" >
                                { images }
                            </Masonry>
                        </div>
                        <div className="border-bottom pb-5"></div>
                    </div>
                </div>
            </div>);
    }
}

export default Achievements