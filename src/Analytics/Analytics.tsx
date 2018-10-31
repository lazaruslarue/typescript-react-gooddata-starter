import * as React from 'react';
import { Component } from 'react'

import { Link, Route } from 'react-router-dom';

import './Analytics.css';

import PageStatistics from './TempGoodData/PageStatistics';
import PostStatistics from './TempGoodData/PostStatistics';

export default class Analytics extends Component {
  public render(){
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/page">Page Statistics</Link></li>
            <li><Link to="/post">Post Statistics</Link></li>
          </ul>
        </nav>
        <Route exact={true} path="/page" component={PageStatistics}/>
        <Route exact={true} path="/post" component={PostStatistics}/>
      </div>
    )
  }
}