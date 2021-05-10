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
                        <img src={`${process.env.PUBLIC_URL}/assets/img/facebook.png`} alt="facebook" className="cursor-pointer" onClick={() => {
                            facebook.current.querySelector("button").click();
                        }}/>
                        <span className="d-none" ref={facebook}>
                            <FacebookLogin
                                appId="2019653678271081"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                            />
                        </span>
                        
                    </li>
                    <li>
                        <img className="cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} alt="linkdin" onClick={() => {
                            instagram.current.querySelector("button").click();
                        }}/>
                        <span className="d-none" ref={instagram}>
                            <InstagramLogin
                                clientId="5fd2f11482844c5eba963747a5f34556"
                                onSuccess={responseInstagram}
                            />
                        </span>
                    </li>
                </ul>
            </div>
            <p>@ 2021 CleanMeUp. Sva prava zadržana.</p>
        </div>
    );
}