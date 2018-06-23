import React, { Component } from 'react';
import '../App.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github-logo.png';
import Facebook from '../images/facebook-logo-button (1).png'

class Main extends React.Component{
    render(){
        return(
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 front'}>
                        <h1>More coding</h1>
                        <h2>More fun!</h2>
                        <p>Hi I'm Marcin, wannabe developer</p>
                        <Link to='/navigation' className={'button-front'}>Check my projects! &#187;</Link>
                        <div className={'icons'}>
                            <a target={'_blank'} href={'https://www.linkedin.com/in/marcin-żelasko-337846165'}><img src={Linkedin} alt={'linkedin logo'}/></a>
                            <a target={'_blank'} href={'https://github.com/marcinzelaskopl'}><img src={Github} alt={'github logo'}/></a>
                            <a target={'_blank'} href={'https://www.facebook.com/marcin.zelasko.5'}><img src={Facebook} alt={'facebook logo'}/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main