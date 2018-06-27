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
import SitOnChair from "./js/SitOnChair";
import Janmar from "./js/Janmar";
import Nadolna from "./js/Nadolna";

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/navigation' component={Navigation} />
                    <Route exact path='/navigation/sitonchair' component={SitOnChair} />
                    <Route exact path='/navigation/janmar' component={Janmar}/>
                    <Route exact path='/navigation/nadolna' component={Nadolna}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;
