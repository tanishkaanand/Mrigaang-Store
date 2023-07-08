import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About Us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/bhai.jpg"
                        alt="contactus"
                        style={{ width: "35%", height: "300px", paddingTop: "40px" }}
                    />
                    <img
                        src="/images/thankyou.jpg"
                        alt="contactus"
                        style={{ width: "60%", height: "400px", paddingLeft: "40px", paddingTop: "60px" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="text-center" style={{ marginTop: "70px" }}>Hey Everyone!</h1>
                    <h1 className="text-center">This is Mrigaang Kumar!</h1>
                    <p className="text-justify mt-2">
                        I welcome you all to the Mrigaang's Store. I have a free soul and adore both cars and animals. And I've started an online shop specifically for folks like me, selling items like car stereo systems, car perfumes, and lights for cars that have been modified. I also offer dog food for our pets and I have a pet named "Oreo." Digitally secured locks are moreover offered in this. I sincerely hope you all like using this site to shop online.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;