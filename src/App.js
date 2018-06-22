import React, { Component } from 'react';
import './App.scss';
import Main from "./js/Front";
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Navigation from "./js/Navigation";

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/navigation' component={Navigation} />
                </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;
