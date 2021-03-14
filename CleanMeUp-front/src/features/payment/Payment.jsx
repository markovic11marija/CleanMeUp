import React from "react";

export const Payment = () => {
    return (
        <>
            <div className="container" id="form">
                <div className="row  d-flex justify-content-center">
                    <div className="col-lg-4 col-md-4"  id="right-form">
                        <div className="right-header payment-header text-center">
                                <p>Način Plaćanja</p>
                        </div>    
                        <div className="right-form-data">
                            <form action="" id="form-style">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="pouzecem" value="option1" checked />
                                                <label className="form-check-label" htmlFor="pouzecem">
                                                     Plaćanje pouzećem
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="kartica" value="option2" />
                                                <label className="form-check-label" htmlFor="kartica">
                                                    Kreditna kartica
                                                </label>
                                              </div>
                                        </td>
                                    </tr>
                                    <tr className="kartice">
                                        <td>
                                            <label htmlFor="ime-kartica">Ime na kartici</label>
                                            <input type="text" className="form-control tabs" id="ime-kartica" />
                                        </td>
                                    </tr>
                                    <tr className="kartice">
                                        <td>
                                            <label htmlFor="broj-kartice">Broj Kartice</label>
                                            <input type="number" id="broj-kartice" className="form-control tabs" />
                                        </td>
                                    </tr>
                                    <tr className="spacing d-flex">
                                        <td>
                                            <label htmlFor="vazi">Vazi do</label>
                                            <input type="number" className="form-control tabs" id="vazi" placeholder="12/24" />
                                        </td>
                                        <td> 
                                            <label htmlFor="cvc">CVC</label>
                                            <input type="number" className="form-control tabs" id="cvc" placeholder="124" />
                                        </td>
                                     
                                    </tr>
                                    <tr>
                                        <td id="btn-naruci"> 
                                            <button className="btn tabs">Naruči</button>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}