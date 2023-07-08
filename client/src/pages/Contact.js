import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { BsInstagram, BsYoutube } from "react-icons/bs";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus " style={{ marginTop: '80px' }}>
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Call us at any time with questions or to learn more about our products.
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : tanu182003@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : +91 9717780779
                    </p>
                    <p className="mt-3">
                        <BsInstagram /> : <a href="https://www.instagram.com/the_rarered_/">the_rarered_</a>
                    </p>
                    <p className="mt-3">
                        <BsYoutube /> : <a href="https://www.youtube.com/@mrigaangkumar">Mrigaang kumar</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;