import React, { Component } from 'react'
import UserAvatar from '../assets/img/user_avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faCoffee, faChevronRight } from '@fortawesome/free-solid-svg-icons'


library.add(fas, fab, faCoffee);

const navBarStyle = () =>  {
    return {
        "background-color": "#04B4E0",
        "height": "100%",
        "maxWidth": "390px",
        "width": "calc(450 * (100vw/1920))",
        "position": "fixed",
        "top": "0",
        "left": "0",
    };
}

const UserAvatarStyle = () => {
    return {
        "width":  "calc(180 * 100vw / 1920)",
        "height": "calc(180 * 100vw / 1920)"
    }
}

export class NavigationBar extends Component {
    render() {
        return (<div style={ navBarStyle() }>
            <div className="text-center">
                <img src={ UserAvatar } style={ UserAvatarStyle() } className="bg-white mt-5 border rounded-circle" alt="user-avatar"/>
            </div>
            <div className="text-center mt-4 text-white" >
                <span className="font-weight-bold d-block" style={{ fontSize: (window.innerWidth < 1920) ? '26px' : '34px' }}>Prashant Varshney</span>
                <span className="font-weight-light d-block" 
                        style={{ fontSize: (window.innerWidth < 1920) ? '18px' : '24px', 
                                 marginTop: (window.innerWidth < 1920) ? '-9px' : '-12px' }}>
                            Software Development Engineer
                </span>
            </div>
            <ul className="text-white mt-4 font-weight-light" 
                style={{ fontSize: (window.innerWidth < 1920) ? '16px' : '20px', listStyle: 'none' }}>
                <li className="mt-1" style={{ display: "flex", alignItems: "center" }}>
                    <a href="#aboutme" className="text-white">About Me</a>
                    <FontAwesomeIcon style={{ fontSize: (window.innerWidth < 1920) ? '12px' : '16px' }} icon={faChevronRight} className="ml-5" />
                </li>
                <li className="mt-1"><a href="#education-and-skills" className="text-white">Education & Skills</a></li>
                <li className="mt-1"><a href="#portfolio" className="text-white">My Portfolio</a></li>
                <li className="mt-1"><a href="#achievements" className="text-white">Achievements</a></li>
                <li className="mt-1"><a href="#publications" className="text-white">Publications</a></li>
                <li className="mt-1 mt-4"><a href="#resume" className="text-white">My Resume</a></li>
                <li className="mt-1"><a href="#blog" className="text-white">Personal Blog</a></li>
                <li className="mt-1"><a href="#contactme" className="text-white">Contact Me</a></li>
            </ul>
            <ul className="text-white mt-5 font-weight-light" 
                style={{ position: 'absolute', bottom: 0 ,fontSize: (window.innerWidth < 1920) ? '16px' : '20px', listStyle: 'none' }}>
                <li className="font-weight-regular">Get in touch</li>
                <li style={{ fontSize: (window.innerWidth < 1920) ? '24px' : '28px' }}>
                    <a href="https://www.facebook.com/4lphacoder" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fab", "facebook-f"]} className="mr-3" /></a>
                    <a href="https://github.com/4lphacoder" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fab", "github"]} className="mr-3" /></a>
                    <a href="https://www.linkedin.com/in/alphacoder/" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fab", "linkedin-in"]} className="mr-3" /></a>
                    <a href="mailto:contact@alphacoder.me" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fas", "envelope-open"]} className="mr-3" /></a>
                    <a href="skype:live:ed5ef789e2b90848?chat" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fab", "skype"]} className="mr-3" /></a>
                    <a href="https://twitter.com/4lphacoder" target="_blank" style={{ color: "white" }} ><FontAwesomeIcon icon={["fab", "twitter"]} className="mr-3" /></a>
                </li>
            </ul>
        </div>);
    }
}

export default NavigationBar;