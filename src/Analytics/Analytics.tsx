import * as React from 'react';
import { Component } from 'react'

import {  Route } from 'react-router-dom';

import './Analytics.css';

import AnalyticsNav from './AnalyticsNav/AnalyticsNav';
import PageStatistics from './TempGoodData/PageStatistics';
import PostStatistics from './TempGoodData/PostStatistics';

export default class Analytics extends Component {
  public render(){
    return (
      <div>
        <AnalyticsNav />
        <Route exact={true} path="/page" component={PageStatistics}/>
        <Route exact={true} path="/post" component={PostStatistics}/>
      </div>
    )
  }
}