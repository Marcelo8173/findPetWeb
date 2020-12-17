import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Following from '../pages/Following';
import Details from '../pages/Details/index';
import Login from '../pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/following" exact component={Following} />
                <Route path="/details/:id" exact component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;