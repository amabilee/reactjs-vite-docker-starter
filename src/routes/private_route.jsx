import { Navigate } from 'react-router-dom';
import { UseAuth } from '../hooks/hook.jsx';

import BasePage from '../pages/index.jsx'

const PrivateRoute = ({ component: Component, componentName, ...rest }) => {
    const { isAuthenticated, signOut } = UseAuth();

    // if (!isAuthenticated) {
    //     signOut()
    //     return <Navigate to="/" />;
    // }
    // if (userLevel) {
    return <Component {...rest} />;
    // } else {
    //     signOut();
    //     return <Navigate to="/" />;
    // }
};

const Base = (props) => <PrivateRoute component={BasePage} componentName="Base Page" {...props} />;

export {
    Base
};