import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Following from '../pages/Following';
import Details from '../pages/Details/index';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';
import Profile from '../pages/Profile';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/create-profile" exact component={NewUser} />
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/following" exact component={Following} />
                <Route path="/details/:id" exact component={Details} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;