import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Services from '../Hotels/Hotels';
import Info from '../Info/Info';
import ServiceBar from '../ServiceBar/ServiceBar';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <ServiceBar></ServiceBar>
        <Services></Services>

        <Article></Article>
        <Info></Info>
      </div>
    );
};

export default Home;