import React from "react";
import FacebookLogin from 'react-facebook-login';

export const Social = () => {
    const responseFacebook = (data) => {
        console.log('dddd', data);
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
                                    <FacebookLogin
                                    appId="920588745373994"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />
                                    </div>
                                    <div className="col-2">
                                    <a href="https://www.linkedin.com/">
                                        <img src="/assets/img/linkedin.png" alt="linkdin"/>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ul className="list-unstyled d-flex justify-content-between button-style">
                                <li><button className="btn tabs">Log in</button></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}