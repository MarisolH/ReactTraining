import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ConnectedScreen from './screens/ConnectedScreen'
import MigueScreen from './screens/MigueScreen'
import JaviScreen from './screens/JaviScreen'
import VicScreen from './screens/VicScreen'
import RodoScreen from './screens/RodoScreen'
import BebidasScreen from './screens/BebidasScreen'

export default () => {
    return <React.Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={ConnectedScreen}></Route>
                <Route path={'/MigueScreen'} component={MigueScreen}></Route>
                <Route path={'/JaviScreen'} component={JaviScreen}></Route>
                <Route path={'/VicScreen'} component={VicScreen}></Route>
                <Route path={'/RodoScreen'} component={RodoScreen}></Route>
                <Route path={'/BebidasScreen'} component={BebidasScreen}></Route>
            </Switch>
        </BrowserRouter>
    </React.Fragment>

}
