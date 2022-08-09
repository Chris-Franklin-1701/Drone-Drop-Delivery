import React from "react";
import "../styles/App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

function Footer() {
return (
    <footer className="footer fixed-bottom">
        <div className="container">
            <p className="m-0 text-center">
                <a><FontAwesomeIcon icon={faEnvelope} className="fa-2x icon"></FontAwesomeIcon> - info@test.com</a>
            </p>
            <p className="m-0 text-center">
            <a><FontAwesomeIcon icon={faPhone} className="fa-phone icon"></FontAwesomeIcon> - (309)555-5551</a>
            </p>
        </div>
    </footer>
);
}

export default Footer;