import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Sticky } from "../../components/sticky/Sticky";
import { HomeHeader } from "./home-header/HomeHeader";
import { OrderSection } from "./order-section/OrderSection";
import { Question } from "./question/Question";
import { Services } from "./services/Services";
import { Trades } from "./trades/Trades";
import { Users } from "./users/Users";

export const LayoutHome = () => {
    return (
        <>
            <HomeHeader/>
            <Services/>
            <Trades/>
            <Question/>
            <OrderSection/>
            <Users/>
            <Footer/>
            <Sticky/>
        </>
    );
}