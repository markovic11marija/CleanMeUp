import React, { useRef } from "react";
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from "react-instagram-login";

export const Social = () => {
    const facebook = useRef();
    const instagram = useRef();

    const responseFacebook = () => {

    }
    const responseInstagram = () => {

    }
    return (
        <div className="col-7 text-right" id="social">
            <p>PRATITE NAS</p>
            <div id="social-icon">
                <ul className="list-unstyled d-flex justify-content-end align-items-center">
                    <li>
                    <a href="https://www.facebook.com/cleanmeup.rs/" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/facebook-new.png`} alt="facebook" className="cursor-pointer"/>
                        </a>
                        
                    </li>
                    <li>
                    <a href="https://www.instagram.com/cleanmeup.rs/" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/img/instagram-new.png`} alt="instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
            <p>@ 2021 CleanMeUp. Sva prava zadržana.</p>
        </div>
    );
}