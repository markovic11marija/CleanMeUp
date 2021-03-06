import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Sticky } from "../../components/sticky/Sticky";
import { MainHeader } from "./main-header/MainHeader";

export const MainLayout = ({children}) => {
    return (
        <>
            <MainHeader>
                {children}
            </MainHeader>
            <Footer/>
            <Sticky/>
        </>
    );
}