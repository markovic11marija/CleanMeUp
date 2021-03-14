import React from "react";

export const Services = () => {
    return (
        <div className="container-fluid gray-background">
            <div className="container" id="services">
                <h3 className="text-right title">Najjednostavniji put do čiste odeće</h3>
                <div className="row justify-content-between services-wrapper">
                    <div className="col-lg-4 col-md-6 single-service">
                        <div className="services-tab d-flex align-items-center flex-column justify-content-center">
                            <div className="services-img text-center">
                                <img src="assets/img/truck.png" alt="truck" />
                            </div>
                            <div className="services-text">
                                <p className="text-center">Popunite formu ili nas pozovite i javite nam gde da pokupimo i gde da dostavimo garderobu, kao i koju od naših usluga želite.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 single-service">
                        <div className="services-tab d-flex align-items-center flex-column justify-content-center">
                            <div className="services-img text-center">
                                <img src="assets/img/hands-washing.png" alt="hands-washing" />
                            </div>
                            <p className="text-center">U zavisnosti od izabrane usluge, naš vredni tim će se pobrinuti da Vaša odeća bude kvalitetno sređena.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 single-service">
                        <div className="services-tab d-flex align-items-center flex-column justify-content-center">
                            <div className="services-img text-center">
                                <img src="assets/img/clothes.png" alt="clothes" />
                            </div>
                            <p className="text-center">Nakon dostave, Vaša odeća je oprana i opeglana i spremna za nošenje.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}