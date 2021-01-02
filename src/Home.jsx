import React from 'react'
import calendar from './calendar.jpeg'
import CommonHeader from "./CommonHeader";

const Home = () => {
    return (
        <>
            <CommonHeader
                brandTitle="Grow your business with"
                brandName="LWA"
                headerButton="Get Started"
                headerImg={calendar}
                visit="/service"
            />
        </>
    );
}

export default Home;
