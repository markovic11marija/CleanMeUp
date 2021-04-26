import React from "react";
import { districts } from "../../../constants/districts";
export const Addresses = ({user, address, setAddress}) => {
    return (
        <>
        {user && (
            <div id="header-form" className="row">
                <div className="col-8">
                    <form className="row g-3">
                        <div className="col-auto">
                        <label htmlFor="vasaadresa">Ulica i Broj</label>
                        <input type="text" className="form-control tabs" id="ulicabroj" placeholder="" defaultValue={user.address.street} onChange={(e)=>{
                            setAddress({...address, street: e.target.value})
                        }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="sprat">Sprat</label>
                            <input type="number" className="form-control tabs" id="sprat" placeholder="-" defaultValue={user.address.floor} onChange={(e)=>{
                                setAddress({...address, floor: e.target.value})
                            }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="interfon">Interfon</label>
                            <input type="text" className="form-control tabs" id="interfon" placeholder="-" defaultValue={user.address.interphone} onChange={(e)=>{
                                setAddress({...address, interphone: e.target.value})
                            }}/>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="opstina">Opština</label>
                            <select className="form-control tabs" defaultValue={user.address.district}  onChange={(e)=>{
                                setAddress({...address, district: e.target.value})
                            }}>
                                <option value="0"> 
                                    Izaberite opštinu
                                </option>
                                {districts.map((x, i) => {
                                    return (
                                        <option key={i} value={x.name}> 
                                            {x.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </form> 
                </div>     
            </div>
        )}
        </>
    )
}