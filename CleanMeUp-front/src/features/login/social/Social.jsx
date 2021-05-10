import React, { useRef } from "react";
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from "react-instagram-login";

export const Social = () => {
    const facebook = useRef();
    const instagram = useRef();

    const responseFacebook = (data) => {
    }
    const responseInstagram = () => {

    }
    return (
        <form action="" id="form-style">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="social-log-in">
                                <p>Uloguj se uz pomoć</p>
                                <div className="row">
                                    <div className="col-2">
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
                                    </div>
                                    <div className="col-2">
                                        <img className="cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`} alt="linkdin" onClick={() => {
                                            instagram.current.querySelector("button").click();
                                        }}/>
                                        <span className="d-none" ref={instagram}>
                                            <InstagramLogin
                                                clientId="5fd2f11482844c5eba963747a5f34556"
                                                onSuccess={responseInstagram}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}