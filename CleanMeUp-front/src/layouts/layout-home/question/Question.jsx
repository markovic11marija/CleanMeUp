import React from "react";

export const Question = () => {
    return (
        <div className="container-fluid gray-background">
            <div className="container" id="question">
                <h3 className="text-left title-secound">Često postavljana pitanja</h3>
                <div className="row questions">
                    <div className="col-lg-6 col-md-12 single-question">
                        <div className="question-tab d-flex">
                            <p>Koliko koštaju usluge pranja i peglanja?</p>
                            <img  src="assets/img/arrow-left.png" alt="arrow-left"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 single-question">
                        <div className="question-tab d-flex">
                            <p>Kako mogu da platim Vaše usluge?</p>
                            <img  src="assets/img/arrow-left.png" alt="arrow-left"/>
                        </div>
                    </div>
                </div>
                <div className="row questions">
                    <div className="col-lg-6 col-md-12 single-question">
                        <div className="question-tab d-flex">
                            <p>Koliko koštaju usluge pranja i peglanja?</p>
                            <img  src="assets/img/arrow-left.png" alt="arrow-left"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 single-question">
                        <div className="question-tab d-flex">
                            <p>Kako mogu da platim Vaše usluge?</p>
                            <img  src="assets/img/arrow-left.png" alt="arrow-left"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}