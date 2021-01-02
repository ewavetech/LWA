import React from 'react'
import devices from './devices.jpg'
import CommonHeader from "./CommonHeader";

const About = () => {
    return (
        <>
            <CommonHeader
                brandTitle="Welcome to About page"
                brandName="LWA"
                headerButton= "Contact Now"
                headerImg={devices}
                visit = "/contact"
            />
        </>
    );
}

export default About;
