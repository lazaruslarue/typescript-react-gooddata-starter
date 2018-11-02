import * as React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom';

import './AnalyticsNav.css';
import User, { UserSubscribe, UserContainer } from 'src/UserProvider/UserProvider';

export default class AnalyticsNav extends Component {
  public render(){

    return (
      <UserSubscribe to={[User]}>
        { (user:UserContainer) => (
        <nav className="Analytics-nav" style={{display: user.state.loggedIn && user.state.analyticsEnabled ? undefined: 'none'}}>
          <ul>
            <li><Link to="/page">Page Statistics</Link></li>
            <li><Link to="/post">Post Statistics</Link></li>
          </ul>
        </nav>
        )}
      </UserSubscribe>

   )
  }
}