import React, {Component} from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import SitSample from '../images/sitlol.jpg';
import SitSample2 from '../images/sitsample2.jpg'
import Slide from 'react-reveal/Slide';

class SitOnChair extends React.Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 sit-bg'}>
                        <h1>Sit on Chair</h1>
                        <h3>Web Design</h3>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-2 sit-inner'}>
                    </div>
                    <div className={'col-8 sit-inner sit-inner-info'}>
                        <h5><i>ABOUT PROJECT</i></h5>
                        <p><i>Goal of the project was to make simple landing page about fictional company that sells chairs. We decided for minimalistic design and simple form of a page.</i></p>
                        <Slide right>
                            <img className={'sit-sample'} src={SitSample} alt={'sample'}/>
                        </Slide>
                        <Slide left>
                            <img className={'sit-sample'} src={SitSample2} alt={'sample'}/>
                        </Slide>
                    </div>
                    <div className={'col-2 sit-inner'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 footer'}>
                        <Link to='/navigation/janmar'><p><strong>Check my next project!</strong> &#187;</p></Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default SitOnChair