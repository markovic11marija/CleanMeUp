import React, { useState } from "react";

export const Question = () => {
    const [openedAnswer, setOpenedAnswer] = useState();
    const questions = [
        {
            text: "Koliko koštaju usluge pranja i peglanja?",
            description: "Pogledajte cenovnik na sajtu, ili na nasim facebook i instagram stranicama. Ukoliko imate pitanja slobodno nas kontaktirajte!"
        },
        {
            text: "Koji je rok za vraćanje odeće?",
            description: "Zavisi od vrste čišćenja, uglavnom 72h od preuzimanja."
        },
        {
            text: "Kako mogu da platim Vaše usluge?",
            description: "Možete da platite online putem sajta ili prilikom dostave na adresu gotovinom."
        },
        {
            text: "Da li radimo dostavu i kako ista funkcioniše?",
            description: "BESPLATNA KUĆNA DOSTAVA! U procesu usluge koju pružamo je preuzimanje Vaše robe sa kućne adrese. Time ćete uštedeti dragoceno vreme koje bi u slučaju donošenja veša kod nas ili bilo gde drugde, proveli u prevozu. Stoga ne treba posebno pominjati uštedu nastalu ovim putem. Naši vozači će se naći na Vašoj adresi veoma brzo nakon dogovora i poštedeti Vas suvišnog posla (ponuda važi za račune preko 999 din)."
        }
    ]
    return (
        <div className="container-fluid gray-background">
            <div className="container" id="question">
                <h3 className="text-left title-secound">Često postavljana pitanja</h3>
                <div className="row questions">
                    {questions.map((x,i) => {
                        return (
                            <div key={i} className="col-lg-12 col-md-12 single-question mb-4" onClick={()=> {
                                setOpenedAnswer(i === openedAnswer? null : i);
                            }}>
                                <div className="question-tab d-flex">
                                    <p>{x.text}</p>
                                    {openedAnswer === i? (
                                        <img  src={`${process.env.PUBLIC_URL}/assets/img/arrow-up.svg`} alt="arrow-up"/>
                                    ): (
                                        <img  src={`${process.env.PUBLIC_URL}/assets/img/arrow-down.svg`} alt="arrow-down"/>
                                    )}
                                </div>
                                {
                                    openedAnswer === i && (
                                        <p className="question-answer ml-5 mt-5">{x.description}</p>
                                    )
                                }
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
