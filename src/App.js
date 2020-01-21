import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ConnectedScreen from './screens/ConnectedScreen'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/'} component={ConnectedScreen}></Route>
                <Route path={'/connected'} component={ConnectedScreen}></Route>
            </Switch>
        </HashRouter>
    )
}
