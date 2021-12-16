import React from 'react';

import { Typewriter } from 'react-simple-typewriter'
import './Homehead.css';






const Homehead = () => {
    
      
    return (
        <div className='bg'>
            
                               
            <div className="row">
                
                <div className="col-6 d-flex justify-content-center align-items-center">
                <h1>Book <span style={{ color: '#ffffff', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Doctor Appoitment', 'Pathology Test', 'Online Medicine Order']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}          
                    />
                    </span></h1>                    
                </div>
                
                <div className="col-6 pt-4">
                    <img data-aos="fade-down"
                         data-aos-easing="linear"
                            data-aos-duration="500" src="https://pngimg.com/uploads/doctor/doctor_PNG15988.png" alt="" />
                </div>
            </div>
         </div>
    );
};

export default Homehead;