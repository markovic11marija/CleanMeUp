import React from "react";
import FacebookLogin from 'react-facebook-login';
export const Social = () => {
    const responseFacebook = () => {

    }
    return (
        <div className="col-7 text-right" id="social">
            <p>PRATITE NAS</p>
            <div id="social-icon">
                <ul className="list-unstyled d-flex justify-content-end">
                    <li>
                        <FacebookLogin
                                    appId="2019653678271081"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />
                        {/* <a href="/">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/facebook.png`} alt="facebook" />
                                
                        </a> */}
                    </li>
                    <li>
                        <a href="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} alt="linkdin" />
                        </a>
                    </li>
                </ul>
            </div>
            <p>@ 2020 CleanMeUp. Sva prava zadržana.</p>
        </div>
    );
}