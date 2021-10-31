import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Hotels/Hotels';
import ServiceBar from '../ServiceBar/ServiceBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceBar></ServiceBar>
            <Services></Services>
        </div>
    );
};

export default Home;