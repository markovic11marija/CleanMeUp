import React, { useState } from "react";

export const Question = () => {
    const [openedAnswer, setOpenedAnswer] = useState();
    const questions = [
        {
            text: "Koliko koštaju usluge pranja i peglanja?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit magnam velit id corrupti minima sint quae dicta iste quibusdam fugit vel distinctio est perspiciatis, ullam odit accusantium modi corporis!"
        },
        {
            text: "Koji je rok za vraćanje odeće?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit magnam velit id corrupti minima sint quae dicta iste quibusdam fugit vel distinctio est perspiciatis, ullam odit accusantium modi corporis!"
        },
        {
            text: "Kako mogu da platim Vaše usluge?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit magnam velit id corrupti minima sint quae dicta iste quibusdam fugit vel distinctio est perspiciatis, ullam odit accusantium modi corporis!"
        },
        {
            text: "Koliko koštaju usluge pranja i peglanja?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit magnam velit id corrupti minima sint quae dicta iste quibusdam fugit vel distinctio est perspiciatis, ullam odit accusantium modi corporis!"
        }
    ]
    return (
        <div className="container-fluid gray-background">
            <div className="container" id="question">
                <h3 className="text-left title-secound">Često postavljana pitanja</h3>
                <div className="row questions">
                    {questions.map((x,i) => {
                        return (
                            <div className="col-lg-12 col-md-12 single-question mb-4" onClick={()=> {
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