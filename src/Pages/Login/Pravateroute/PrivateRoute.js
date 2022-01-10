import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
            render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
            ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;