import { Countries } from "../components/country/CountryList"
import { Header } from "../components/header/Header"
import { City } from "./../pages/city"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const Hotteler = () => {

    return(
        <>
            < Header />
                <Routes>
                    <Route path="/" element={<Countries />} />
                    <Route path="/city/:country/:city" element={<City />} />
                </Routes>
        </>
    )
}