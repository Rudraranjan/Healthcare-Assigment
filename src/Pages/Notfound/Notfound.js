import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h4>Page Not Found</h4>
            <Link to="/"><Button>Go back</Button></Link>
        </div>
    );
};

export default Notfound;