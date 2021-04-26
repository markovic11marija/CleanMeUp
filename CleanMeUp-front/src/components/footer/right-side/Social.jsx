import React from "react";
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from "react-instagram-login";

export const Social = () => {
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
                        <FacebookLogin
                                    appId="2019653678271081"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}

                                />
                    </li>
                    <li>
                        <InstagramLogin
                            clientId="5fd2f11482844c5eba963747a5f34556"
                            onSuccess={responseInstagram}
                        />
                    </li>
                </ul>
            </div>
            <p>@ 2020 CleanMeUp. Sva prava zadržana.</p>
        </div>
    );
}