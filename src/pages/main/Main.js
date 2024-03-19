import React from "react";
import HeroSection from "../../layouts/heroSection/HeroSection";
import AboutSection from "../../layouts/aboutSection/AboutSection";
import ServicesSection from "../../layouts/servicesSection/ServicesSection";
import PartnershipSection from "../../layouts/partnershipSection/PartnershipSection";
import CareersSection from "../../layouts/careersSection/CareersSection";
import TrainingSection from "../../layouts/trainingSection/TrainingSection";
import ContactSection from "../../layouts/contactSection/ContactSection";
import CommentsSection from "layouts/commentsSection/CommentsSection";

const Main = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PartnershipSection />
            <CareersSection />
            <TrainingSection />
            <ContactSection />
            <CommentsSection />
        </>
    );
};

export default Main;
