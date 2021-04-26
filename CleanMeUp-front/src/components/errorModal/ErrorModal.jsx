import React, { useEffect, useState } from "react";

export const ErrorModal = ({open, handleClose, text}) => {
    const [openModal,setOpenModal] = useState(open);

    useEffect(()=> {
        setOpenModal(open);
    }, [open])

    return (<>{openModal && (
        <div className="success-modal-wrapper" onClick={()=> handleClose()}>
            <div className="success-modal-content">
                <p className="error-text">{text}</p>
            </div>
        </div>
    )}</>)
}