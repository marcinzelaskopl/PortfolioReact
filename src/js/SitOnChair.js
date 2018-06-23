import React, {Component} from 'react';
import '../App.css';

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
                    </div>
                    <div className={'col-2 sit-inner'}>
                    </div>
                </div>
            </div>
        )
    }
}

export default SitOnChair