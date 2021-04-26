import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserById, updateAddress, updateUser } from "../../api/userApi";
import { SuccessModal } from "../../components/successModal/SuccessModal";
import { getLoggedUserId } from "../../helpers/authHelper";
import { Addresses } from "./addresses/Addresses";

export const Account = () => {
    const { loggedUserDetails, updatedUser, updatedAddress } = useSelector(state => state.userReducer);
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("");
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);
    
    useEffect(()=> {
        getUserById(getLoggedUserId());
    },[])

    useEffect(()=> {
        if(loggedUserDetails) {
            if(!loggedUserDetails.address) {
                loggedUserDetails.address = {};
            }
            setUser(loggedUserDetails);
            setAddress(loggedUserDetails.address);
        }
    },[loggedUserDetails])

    const saveChanges = () => {
        if(activeTab === "account") {
            updateUser(getLoggedUserId(),user);
        } else {
            updateAddress({...address, userId: getLoggedUserId()})
        }
    }

    useEffect(() => {
        if(updatedUser || updatedAddress) {
            setOpen(true);
            setTimeout(()=> {
                setOpen(false);
            }, 1500);
        }
    }, [updatedUser, updatedAddress])

    return (
        <>
        {user && (
            <>
            <form onSubmit={(e)=> {
                e.preventDefault()
                saveChanges();
            }}>
                <div className="container" id="form-button">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end" id="header-btn">
                            <button type="submit" className="btn btn-third" >Sačuvaj izmene</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 account-right-form"  id="right-form">
                    <div className="right-form-data">
                    <Tabs defaultActiveKey="account" transition={false} id="noanim-tab-example" onSelect={(key)=>{
                        setActiveTab(key);
                    }}>
                        <Tab eventKey="account" title="Moj Nalog">
                            <form action="" id="form-style" className="w-50">
                                <table>
                                    <tbody>
                                        <tr className="spacing">
                                            <td>
                                                <label htmlFor="punoime">Puno Ime</label>
                                                <input type="text" required className="form-control tabs" id="punoime" defaultValue={user.fullName} onChange={(e)=> {
                                                    setUser({...user, fullName: e.target.value})
                                                }}/>
                                            </td>
                                            <td className="email">
                                                <label htmlFor="emailadresa">Email Adresa</label>
                                                <input type="email" required className="form-control tabs" id="emailadresa" defaultValue={user.email} onChange={(e)=> {
                                                    setUser({...user, email: e.target.value})
                                                }}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="vasa-sifra">
                                                <label htmlFor="vasasifra">Vaša Šifra</label>
                                                <input type="password" className="form-control tabs" id="vasasifra" onChange={(e)=> {
                                                    setUser({...user, password: e.target.value})
                                                }}/>
                                            </td>
                                        </tr>
                                        <tr className="re-password">
                                            <td>
                                                <label htmlFor="ponovite">Ponovite Šifru</label>
                                                <input type="password" className="form-control tabs" id="ponovite"  onChange={(e)=>{
                                                    if(e.target.value !== user.password){
                                                        e.target.setCustomValidity("Šifre se ne poklapaju.");
                                                    } else {
                                                        e.target.setCustomValidity("");
                                                    }
                                                                
                                                }}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </Tab>
                        <Tab eventKey="addresses" title="Moje Adrese">
                            <Addresses user={user} address={address} setAddress={setAddress}/>                  
                        </Tab>
                    </Tabs>
                    </div>    
                </div>
                <SuccessModal open={open} handleClose={()=>{}} text={activeTab === "account"? "Uspešno ste sačuvali izmene naloga": "Uspešno ste izmenili adresu"}/>
            </form>
            </>
        )}
    </>);
}