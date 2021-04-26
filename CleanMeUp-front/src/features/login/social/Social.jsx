import React from "react";
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from "react-instagram-login";

export const Social = () => {
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
                                    <div className="col-12">
                                        <FacebookLogin
                                            appId="920588745373994"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={responseFacebook}
                                        />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <InstagramLogin
                                            clientId="5fd2f11482844c5eba963747a5f34556"
                                            onSuccess={responseInstagram}
                                        />
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