import * as React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom';

import './AnalyticsNav.css';

import User, { UserContainer, UserSubscribe } from 'src/UserProvider/UserProvider';

export default class AnalyticsNav extends Component {
  public render() {
    return (
      <UserSubscribe to={[User]}>
        {(user: UserContainer) => (
          <nav className="Analytics-nav" >
            <ul>
              {user.state.analyticsEnabled ? this.showPageLink() : null}
              {user.state.analyticsEnabled ? this.showPostLink() : null}
              {user.state.showBanners ? this.showBannerLink() : null}
              {user.state.showLeadgen ? this.showLeadgenLink() : null}
            </ul>
          </nav>
        )}
      </UserSubscribe>
    )
  }

  private showBannerLink = () => (<li><Link to="/banner-report">Banner Report</Link></li>)
  private showLeadgenLink = () => (<li><Link to="/leadgen-report">Leadgen Report</Link></li>)
  private showPageLink = () => (<li><Link to="/page">Page Statistics</Link></li>)
  private showPostLink = () => (<li><Link to="/post">Post Statistics</Link></li>)



}