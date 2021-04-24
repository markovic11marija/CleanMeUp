import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export const SuccessModal = ({open, handleClose, text}) => {
    const [openModal,setOpenModal] = useState(open);

    useEffect(()=> {
        setOpenModal(open);
    }, [open])

    return (<>{openModal && (
        <div className="success-modal-wrapper" onClick={()=> handleClose()}>
            <div className="success-modal-content">
                <h3>{text}</h3>
                <div className="position-relative">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <img className="spinner-img" src={`${process.env.PUBLIC_URL}/assets/img/washing-machine.svg`} alt="Washing machine"/>
                </div>
            </div>
        </div>
    )}</>)
}