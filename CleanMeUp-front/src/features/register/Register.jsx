import React, { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createUser } from "../../api/userApi";
import { SuccessModal } from "../../components/successModal/SuccessModal";
import { Social } from "../login/social/Social";

export const Register = ({nextStep, previousStep}) => {
    const history = useHistory();
    const { insertedUser } = useSelector(state => state.userReducer);
    const [user,setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [openModal,setOpenModal] = useState(false);
    const formRef = useRef();

    const register = () => {       
        createUser(user);
    }

    useEffect(()=>{
        if(insertedUser) {
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
                if(nextStep) {
                    nextStep();
                } else {
                    history.push("/page/login/app-user");
                }
            }, 2500);
        }
    }, [insertedUser])

    return (
        <>
            <div className="container" id="form-button">
                <div className="row">
                    <div className="col-11" id="header-btn">
                        <button type="button" className="log-in" onClick={()=>{
                            if(previousStep) {
                                previousStep();
                            }
                        }}>Nazad</button>
                    </div>
                </div>
            </div>
            <div className="container" id="form">
                <div className="row" id="register-form-wrapper">
                    <div className="col-lg-6 col-md-12" id="left-form">
                        <h4>Zašto da napravim nalog?</h4>
                        <ul className="list-unstyled">
                            <li>Ukoliko napravite nalog, dobijate brojne pogodnosti:</li>
                            <li> 1. Lakše naručivanje i plaćanje </li>
                            <li>2. Možete da pratite status Vaše porudžbine</li>
                            <li>3. Ostvarite popuste na naredne porudžbine</li>
                        </ul>                
                    </div>
                    <div className="col-lg-6 col-md-12"  id="right-form">   
                        <div className="right-form-data">
                            <Tabs defaultActiveKey="appUser" transition={false} id="noanim-tab-example">
                                <Tab eventKey="appUser" title="Napravite Nalog">
                                    <form ref={formRef} action="" id="form-style" onSubmit={(e)=>{
                                        e.preventDefault();

                                        if(user.fullName.length !== 0 && user.email.length !== 0 && user.password.length !== 0) {
                                            register();
                                        }
                                    }}>
                                        <table>
                                            <tbody>
                                                <tr className="spacing">
                                                    <td>
                                                        <label htmlFor="punoime">Puno Ime</label>
                                                        <input type="text" required className="form-control tabs" name="punoime" onChange={(e)=>{
                                                            setUser({...user, fullName: e.target.value})
                                                        }}/>
                                                    </td>
                                                    <td className="email">
                                                        <label htmlFor="emailadresa">Email Adresa</label>
                                                        <input type="email" required className="form-control tabs" name="emailadresa" onChange={(e)=>{
                                                            setUser({...user, email: e.target.value})
                                                        }}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="vasasifra">Vaša Šifra</label>
                                                        <input type="password" autoComplete="on" required className="form-control tabs" name="vasasifra" onChange={(e)=>{
                                                            if(e.target.value.length > 8 && e.target.value.match(/^.*[A-Z]+.*$/)){
                                                                setUser({...user, password: e.target.value});
                                                                e.target.setCustomValidity("");
                                                            } else {
                                                                e.target.setCustomValidity("Morate uneti šifru.");
                                                            }
                                                            
                                                        }}/>
                                                    </td>
                                                    <td>
                                                        <ul className="list-unstyled password-list">
                                                            <li>* Šifra mora imati vise od 8 znakova </li>
                                                            <li>* Šifra mora da sadrži jedno veliko slovo</li>
                                                        </ul>
                                                    </td> 
                                                </tr>
                                                <tr className="re-password">
                                                    <td>
                                                        <label htmlFor="ponovite">Ponovite Šifru</label>
                                                        <input type="password" autoComplete="on" required className="form-control tabs" name="ponovite" onChange={(e)=>{
                                                            if(e.target.value !== user.password){
                                                                e.target.setCustomValidity("Šifre se ne poklapaju.");
                                                            } else {
                                                                e.target.setCustomValidity("");
                                                            }
                                                            
                                                        }}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="check-box"> 
                                                        <ul className="list-unstyled check-style">
                                                            <li>
                                                                <label className="checkmark-container"> Prihvatam uslove poslovanja CleanMeUp
                                                                    <input required type="checkbox" onChange={(e)=> {
                                                                        setUser({...user, conditions: e.target.checked})
                                                                    }}/>
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <ul className="list-unstyled d-flex justify-content-between button-style">
                                                            <li><button className="btn btn-primary no-background">Preskoči</button></li>
                                                            <li><button type="submit" className="btn btn-primary" disabled={!user.conditions}>Dalje</button></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="clean-p text-center">
                                                        <p>Već imate CleanMeUp nalog? Ulogujte se <Link className="hover" to="/page/login">ovde</Link> </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </Tab>
                                <Tab eventKey="profile" title="Social Log-in">
                                    <Social  />
                                </Tab>
                            </Tabs>
                        </div>    
                    </div>
                </div>
            </div>
            <SuccessModal open={openModal} handleClose={() => {}} text="Uspešno ste napravili nalog"/>
        </>
    );
}