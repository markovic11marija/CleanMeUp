import React from "react";

export const Users = () => {
    return (
        <div className="container" id="users">
            <h3 className="text-right title">Šta kažu naši korisnici o nama</h3>
            <div className="row justify-content-between">
                <div className="col-lg-5  col-md-12 d-flex justify-content-between user">
                    <div className="user-img">
                        <img src="assets/img/girl.png" alt="girl" />
                        <p className="font-italic">Irena, 28, Beograd</p>
                    </div>
                    <div className="review">
                        <ul className="list-unstyled d-flex">
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                            <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>     
                        </ul>
                        <p>Izvanredna usluga, brza dostava i odeća mi je oprana u skladu sa tim što sam tražila. Odlično!</p>
                    </div>
                </div>
                <div className="col-lg-5  col-md-12 d-flex justify-content-between user">
                    <div className="user-img">
                        <img src="assets/img/man-1209494_640.png" alt="man" />
                        <p className="font-italic">Marko, 42, Beograd</p>
                    </div>
                    <div className="review">
                        <ul className="list-unstyled d-flex">
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="assets/img/star.png" alt="star" />
                            </li>     
                        </ul>
                        <p>Sve je uradjeno tako kako sam trazio, garderoba mi je oprana za par sati i donesena na adresu. Sve pohvale!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}