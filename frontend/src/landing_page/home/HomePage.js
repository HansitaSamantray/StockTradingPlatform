import React from 'react';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Hero from './Hero';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
           <Hero />
           <Awards />
           <Stats />
           <Pricing />
           <Education />
           <OpenAccount />
        </>
     );
}

export default HomePage;