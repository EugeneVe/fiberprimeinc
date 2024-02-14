import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollOnTop from "./components/scrollontop/ScrollOnTop";
import Main from "./pages/main/Main";
import AboutSection from "./layouts/aboutSection/AboutSection";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactSection from "./layouts/contactSection/ContactSection";
import "./styles/App.css";

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
                        path="/contacts"
                        element={<ContactSection />}
                    />
                    <Route
                        path="/"
                        element={<Main />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
