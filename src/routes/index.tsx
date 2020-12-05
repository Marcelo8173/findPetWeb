import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Following from '../pages/Following';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/following" exact component={Following} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;