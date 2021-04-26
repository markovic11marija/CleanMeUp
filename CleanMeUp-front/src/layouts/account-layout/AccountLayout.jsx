import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Sticky } from "../../components/sticky/Sticky";
import { AccountHeader } from "./accountHeader/AccountHeader";

export const AccountLayout = () => {
    return (
        <>
            <AccountHeader/>
            <Footer/>
            <Sticky/>
        </>
    );
}