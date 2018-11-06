import * as React from 'react';
import { Component } from 'react'

import { Button } from '@material-ui/core';

import logo from './harvest-logo-200x200.png';
import './HvstHeader.css';

import { showDevControls } from 'src/DevControls/DevControl';

export default class HvstHeader extends Component {
  public render() {
    return (
      <header className="App-header">
        <div className="left-side">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hvst Analytics</h1>
        </div>
        <div className="right-side">
          <Button
            /*  tslint:disable-next-line:jsx-no-lambda */
            onClick={() => alert('go to hvst.com')}
            className="Header-platform"
            variant="outlined"
            color="secondary">
            return to platform</Button>
          <Button
            onClick={showDevControls}
            className="Header-settings"
            variant="outlined"
            color="secondary">
            Settings</Button>
        </div>
      </header>
    )
  }
}