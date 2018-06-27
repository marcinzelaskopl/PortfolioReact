import React, {Component} from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import SitOnChair from "./SitOnChair";
import Main from "./Front";

class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visibility: '',
            visibility2: '',
            visibility3: ''
        }

    }
    handleOff = (event) => {
        this.setState({
            visibility: 'hidden'
        });
    };
    handleOff2 = (event) => {
        this.setState({
            visibility2: 'hidden'
        });
    };
    handleOff3 = (event) => {
        this.setState({
            visibility3: 'hidden'
        });
    };

    handleOn = (event) => {
        this.setState({
            visibility: 'visible'
        })
    }
    handleOn2 = (event) => {
        this.setState({
            visibility2: 'visible'
        })
    }
    handleOn3 = (event) => {
        this.setState({
            visibility3: 'visible'
        })
    }


    render(){
        return(
            <div className={'grid-container navigation'}>
                <div className={'row'}>
                    <Link to='/navigation/sitonchair'><div onMouseEnter={this.handleOff} onMouseLeave={this.handleOn} className={'col-4' +
                ' sit'}>
                        <h3 style={{visibility: this.state.visibility}}>Sit on Chair</h3>
                        <p style={{visibility: this.state.visibility}}>Fun project for a friend</p>
                    </div></Link>
                    <Link to='navigation/janmar'><div onMouseEnter={this.handleOff2} onMouseLeave={this.handleOn2} className={'col-4' +
                    ' janmar'}>
                        <h3 style={{visibility: this.state.visibility2}}>Janmar</h3>
                        <p style={{visibility: this.state.visibility2}}>Web Design</p>
                    </div></Link>
                    <Link to='/navigation/nadolna'><div onMouseEnter={this.handleOff3} onMouseLeave={this.handleOn3} className={'col-4 an'}>
                        <h3 style={{visibility: this.state.visibility3}}>Asia Nadolna Portfolio</h3>
                        <p style={{visibility: this.state.visibility3}}>Web Design</p>
                    </div></Link>
                </div>
            </div>
        )
    }
}

export default Navigation