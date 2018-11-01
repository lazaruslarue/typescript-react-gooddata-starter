import * as React from 'react';
import { Component } from 'react'

import './HvstHeader.css';

import logo from './harvest-logo-200x200.png';


export default class HvstHeader extends Component {
  public render(){
    return (
      <header className="App-header">
        <div className="left-side">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hvst Analytics</h1>
        </div>
        <div className="right-side">
          <span className="Header-platform">return to platform</span>
          <span className="Header-settings">settings</span>
        </div>
      </header>
   )
  }
}