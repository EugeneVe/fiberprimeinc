import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollOnTop from "components/scrollontop/ScrollOnTop";
import Main from "pages/main/Main";
import Header from "components/header/Header";
import AboutSection from "layouts/aboutSection/AboutSection";
import ServicesSection from "layouts/servicesSection/ServicesSection";
import PartnershipSection from "layouts/partnershipSection/PartnershipSection";
import CareersSection from "layouts/careersSection/CareersSection";
import TrainingSection from "layouts/trainingSection/TrainingSection";
import ContactSection from "layouts/contactSection/ContactSection";
import Footer from "components/footer/Footer";
import PageNotFound from "pages/pageNotFound/PageNotFound";
import "./styles/App.scss";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollOnTop />
                <Header />
                <Routes>
                    <Route
                        path="/about"
                        element={<AboutSection />}
                    />
                    <Route
                        path="/services"
                        element={<ServicesSection />}
                    />
                    <Route
                        path="/partnership"
                        element={<PartnershipSection />}
                    />
                    <Route
                        path="/careers"
                        element={<CareersSection />}
                    />
                    <Route
                        path="/training"
                        element={<TrainingSection />}
                    />
                    <Route
                        path="/contact"
                        element={<ContactSection />}
                    />
                    <Route
                        path="/"
                        element={<Main />}
                    />
                    <Route
                        path="*"
                        element={<PageNotFound />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
