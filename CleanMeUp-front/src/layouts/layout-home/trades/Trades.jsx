import React from "react";

export const Trades = () => {
    return (
        <div className="container-fluid  purple-background d-flex align-items-center" id="trades">
            <div className="container align-items-center">
                <div className="row">
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/tap-new.png" alt="tap-new"/>
                        </div>
                        <p>Jednostavno naručivanje</p>
                    </div>
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/XMLID_806_.png" alt="xmlid"/>
                        </div>
                        <p>Brza usluga</p>
                    </div>
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/truck-new.png" alt="truck-new"/>
                        </div>
                        <p>Besplatna dostava</p>
                    </div>
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/suit.png" alt="suit"/>
                        </div>
                        <p>Usluga po Vašoj meri</p>
                    </div>
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/support.png" alt="support"/>
                        </div>
                        <p>Online podrška 00-24</p>
                    </div>
                    <div className="col-lg-4  col-sm-6 text-center d-flex flex-column align-items-center trade-circle">
                        <div className="trades-img">
                            <img src="assets/img/review.png" alt="review"/>
                        </div>
                        <p>Kvalitetno oprana odeća</p>
                    </div>
                </div>
            </div>
        </div>
    );
}