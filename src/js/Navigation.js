import React, {Component} from 'react';
import '../App.css';


class Navigation extends React.Component {
    render() {
        return (
            <div className={'grid-container navigation'}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <h3>Sit on Chair</h3>
                        <p></p>
                    </div>
                    <div className={'col-4'}>
                        <h3>Janmar</h3>
                    </div>
                    <div className={'col-4'}>
                        <h3>Asia Nadolna Portfolio</h3>
                    </div>
                </div>
            </div>

        )
    }
}

export default Navigation