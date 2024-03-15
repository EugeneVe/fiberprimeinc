import React from "react";
import ContactsImage from "assets/image/illustration_contacts.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";
import "./ContactSection.scss";

const ContactSection = () => {
    return (
        <div className="section-wrapper contacts">
            <div
                className="title"
                data-aos="fade-down"
            >
                CONTACT US
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <div className="section-content contacts-content-style">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
                    </div>
                    <br />
                    <br />
                    <p
                        className="address"
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        Address: <br />
                        <a href="https://maps.app.goo.gl/SeP7kgyebYn8qTCJ6">2400 Satellite Blvd, Buford, GA 30518</a>
                        <br />
                        Phone: <br />
                        <a href="tel:">+1(000)000-0000</a>
                        <br />
                        <a href="tel:">+1(000)000-0000</a> <br />
                        <a href="mailto:aaa@aaa.com">Email: aaa@aaa.com</a>
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <img
                            src={ContactsImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
