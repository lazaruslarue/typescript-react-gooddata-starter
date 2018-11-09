import * as React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom';

import './AnalyticsNav.css';

import User, { AuthContainer, AuthSubscribe } from 'src/AuthService/Auth';

export default class AnalyticsNav extends Component {
  public render() {
    return (
      <AuthSubscribe to={[User]}>
        {(user: AuthContainer) => (
          <nav className="Analytics-nav" >
            <ul>
              {user.state.hasPageAnalytics ? this.showPageLink() : null}
              {user.state.hasPageAnalytics ? this.showPostLink() : null}
              {user.state.hasBannerReport ? this.showBannerLink() : null}
              {user.state.showLeadgen ? this.showLeadgenLink() : null}
            </ul>
          </nav>
        )}
      </AuthSubscribe>
    )
  }

  private showBannerLink = () => (<li><Link to="/banner-report">Banner Report</Link></li>)
  private showLeadgenLink = () => (<li><Link to="/leadgen-report">Leadgen Report</Link></li>)
  private showPageLink = () => (<li><Link to="/page">Page Statistics</Link></li>)
  private showPostLink = () => (<li><Link to="/post">Post Statistics</Link></li>)



}