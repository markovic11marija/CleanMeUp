import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUserError } from "../../../actions/userActions";
import { getUser } from "../../../api/userApi";
import { ErrorModal } from "../../../components/errorModal/ErrorModal";
import { SuccessModal } from "../../../components/successModal/SuccessModal";
import { storeLoggedUser } from "../../../helpers/authHelper";
import store from "../../../store";

export const AppUser = () => {
    const history = useHistory();
    const { loggedUser, failureReason } = useSelector(state => state.userReducer);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [openErrorModal, setOpenErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});

    const login = () => {
        getUser({
            email: user.email,
            password: user.password
        });
    }

    useEffect(()=> {
        if(loggedUser) {
            storeLoggedUser(loggedUser);
            setOpenSuccessModal(true);
            setTimeout(()=> {
                setOpenSuccessModal(false);
                history.push("/account/my");
            }, 1500)
        }
    }, [loggedUser])

    useEffect(()=> {
        if(failureReason) {
            setErrorMessage(failureReason);
            setOpenErrorModal(true);
            store.dispatch(getUserError(""));
        }
    },[failureReason])

    return (
        <>
        <form action="" id="form-style">
            <table>
                <tbody>
                    <tr className="spacing">
                        <td>
                            <label htmlFor="emailadresa">Email Adresa</label>
                            <input type="email" className="form-control tabs" id="emailadresa" onChange={(e) => {
                                setUser({...user, email: e.target.value})
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="vasasifra">Vaša Šifra</label>
                            <input type="password" className="form-control tabs" id="vasasifra" onChange={(e) => {
                                setUser({...user, password: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="check-box-log-in"> 
                            <ul className="list-unstyled check-style">
                                <li>
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <input className="form-check-input checkbox-style" type="checkbox" value="" id="zapamti" />
                                        <label className="form-check-label" htmlFor="zapamti">
                                            Zapamti me </label>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="log-in-btn">
                            <Button type="button" className="btn tabs" onClick={login}>Log in</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="clean-p text-center">
                            <p>Nemate nalog? Napravite ga <Link to="/page/register" className="hover">ovde</Link></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <ErrorModal open={openErrorModal} handleClose={() => setOpenErrorModal(false)} text={errorMessage}/>
        <SuccessModal open={openSuccessModal} handleClose={() => {}} text={"Uspešno ste se ulogovali"}/>
        </>
    );
}