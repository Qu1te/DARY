import React from "react";
import Header from "./Header";
import "../pages/About.css"


const AboutUs = () => {
    return(
    <div>
        <Header/>
        <div>
            <div>
                <h1 className="name">About of Deary</h1>
            </div>
            <div className="all">
                <p className="text">
                Do you want to keep a diary, but worry about your privacy and security? Do you want to express your thoughts and feelings, but don't want anyone to know who you are? If so, you might be interested in "Secret Diary", a fictional electronic diary app that guarantees 100% protection and anonymity of your data.
                </p>
                <p><img src="butim.jpg" alt="" className="butimf"/></p>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;