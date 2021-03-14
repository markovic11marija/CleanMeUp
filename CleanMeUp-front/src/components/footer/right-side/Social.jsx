import React from "react";

export const Social = () => {
    return (
        <div className="col-7 text-right" id="social">
            <p>PRATITE NAS</p>
            <div id="social-icon">
                <ul className="list-unstyled d-flex justify-content-end">
                    <li>
                        <a href="/">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/facebook.png`} alt="facebook" />
                        </a>
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