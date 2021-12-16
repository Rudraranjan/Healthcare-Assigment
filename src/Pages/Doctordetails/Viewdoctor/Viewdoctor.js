import React from 'react';
import { useParams } from 'react-router-dom';

const Viewdoctor = () => {
    const {doctorview} = useParams();
    return (
        <div>
            <h2>this is booking : {doctorview}</h2>
        </div>
    );
};

export default Viewdoctor;