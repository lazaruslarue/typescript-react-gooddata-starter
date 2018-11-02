import * as React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom';

import './AnalyticsNav.css';

export default class AnalyticsNav extends Component {
  public render(){
    return (
    <nav className="Analytics-nav">
      <ul>
        <li><Link to="/page">Page Statistics</Link></li>
        <li><Link to="/post">Post Statistics</Link></li>
      </ul>
    </nav>
   )
  }
}