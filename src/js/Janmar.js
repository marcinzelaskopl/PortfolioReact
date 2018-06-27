import React, {Component} from 'react';
import '../App.css';
import JanmarLogo from '../images/janmar-logo.png'
import Slide from 'react-reveal/Slide';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class Janmar extends React.Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 janmar-bg'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-2 janmar-inner'}>
                    </div>
                    <div className={'col-8 janmar-inner janmar-inner-info'}>
                        <h5><i>ABOUT PROJECT</i></h5>
                        <p><i>Create one-page website for cosmetics shop in Legnica, Poland.</i></p>
                        <p><i>Keep simple, but classy and modern design.</i></p>
                        <Slide bottom>
                        <img src={JanmarLogo} alt={'Janmar Logo'}/>
                        </Slide>
                    </div>
                    <div className={'col-2 janmar-inner'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 footer'}>
                        <Link to='/navigation/nadolna'><p>Check my next project! &#187;</p></Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default Janmar