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
        "width": "100%",
        "maxWidth": "410px"
    };
}

export class NavigationBar extends Component {
    render() {
        return (<div style={ navBarStyle() }>
            <div className="text-center">
                <img src={ UserAvatar } className="bg-white mt-5 border rounded-circle" alt="user-avatar"/>
            </div>
            <div className="text-center mt-4 text-white" >
                <span className="font-weight-bold d-block" style={{ fontSize: "34px" }}>Prashant Varshney</span>
                <span className="font-weight-light d-block" style={{ fontSize: '24px', marginTop: '-12px' }}>Software Development Engineer</span>
            </div>
            <ul className="text-white mt-5 font-weight-light" style={{ fontSize: '22px', listStyle: 'none' }}>
                <li className="mt-1" style={{ display: "flex", alignItems: "center" }}>
                    About Me 
                    <FontAwesomeIcon style={{ fontSize: '16px' }} icon={faChevronRight} className="ml-3" />
                </li>
                <li className="mt-1">Education & Skills</li>
                <li className="mt-1">Achievements</li>
                <li className="mt-1">Portfolio</li>
                <li className="mt-1 mt-5">My Resume</li>
                <li className="mt-1 mb-5">Contact Me</li>
                <li className="mt-5">Get in touch</li>
                <li style={{ fontSize: "28px" }}>
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} className="mr-3" />
                    <FontAwesomeIcon icon={["fab", "github"]} className="mr-3" />
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="mr-3" />
                    <FontAwesomeIcon icon={["fas", "envelope-open"]} className="mr-3" />
                    <FontAwesomeIcon icon={["fab", "skype"]} className="mr-3" />
                    <FontAwesomeIcon icon={["fab", "twitter"]} className="mr-3" />
                </li>
            </ul>
        </div>);
    }
}

export default NavigationBar;