import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import Homehead from '../Homohead/Homehead';

import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
         <Homehead></Homehead>            
         <Services></Services>
         <Aboutus></Aboutus>
         
         
        </div>
    );
};

export default Home;