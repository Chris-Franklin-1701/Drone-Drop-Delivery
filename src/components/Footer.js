import React from "react";
import { Link } from "react-router-dom"
import "../index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer() {
return (
    <footer className="bg-dark fixed-bottom">
        <div className="container">
            <p className="m-0 text-center text-white">
                <a><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon>info@test.com</a>
                <a><FontAwesomeIcon icon={faPhone} className="fa-phone"></FontAwesomeIcon>309-555-5551</a>
            </p>
        </div>
    </footer>
);
}

export default Footer;