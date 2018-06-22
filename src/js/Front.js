import React, { Component } from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 front'}>
                        <h1>More coding</h1>
                        <h2>More fun!</h2>
                        <p>Hi, I'm Marcin, wannabe developer</p>
                        <Link to='/navigation' className={'button-front'}>Check my projects! &#187;</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main