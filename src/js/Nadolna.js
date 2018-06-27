import React, {Component} from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import AnSample1 from '../images/an-sample1.png'
import AnSample2 from '../images/an-sample2.png'

class Nadolna extends React.Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 nadolna-bg'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-2 nadolna-inner'}>
                    </div>
                    <div className={'col-8 nadolna-inner nadolna-inner-info'}>
                        <h5><i>ABOUT PROJECT</i></h5>
                        <p><i>Goal of the project was to make portfolio page for artist located in Wrocław. Page contains colorful design, links to other social media and contact form.</i></p>
                        <Slide right>
                            <img className={'nadolna-sample'} src={AnSample1} alt={'img of an'}/>
                        </Slide>
                        <Slide left>
                            <img className={'nadolna-sample'} src={AnSample2} alt={'img of an'}/>
                        </Slide>
                    </div>
                    <div className={'col-2 nadolna-inner'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 footer'}>
                        <Link to='/navigation/sitonchair'><p><strong>Check my next project!</strong> &#187;</p></Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default Nadolna