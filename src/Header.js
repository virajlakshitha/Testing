import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-header-left">
                        <img src={logo} className="image"/>
                    </div>
                </header>
            </div>
        );
    }
}

