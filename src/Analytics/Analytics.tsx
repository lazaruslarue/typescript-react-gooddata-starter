import * as React from 'react';
import { Component } from 'react'

import { Redirect, Route, } from 'react-router-dom';

import './Analytics.css';

import User, { UserContainer, UserSubscribe } from 'src/UserProvider/UserProvider';

import AnalyticsNav from './AnalyticsNav/AnalyticsNav';

import PageStatistics from './TempGoodData/PageStatistics';
import PostStatistics from './TempGoodData/PostStatistics';

import PremiumPageStatistics from './TempGoodData/PageStatistics.Premium';
import PremiumPostStatistics from './TempGoodData/PostStatistics.Premium';

export default class Analytics extends Component {
  public render() {
    return (
      <div>
        <UserSubscribe to={[User]}>
          {(user: UserContainer) => (
            <div>
              <AnalyticsNav />
              {this.RedirectIfNotEnabled(user)}
              {/* {user.state.premiumAnalytics ? this.AnalyticsApplicationRoutes(user) : this.MustEnableAnalytics()} */}
            </div>
          )
          }

        </UserSubscribe>
      </div>
    )
  }

  private AnalyticsApplicationRoutes = (user: UserContainer) => {
    if (user.state.premiumAnalytics) {
      return this.PremiumRouteDefinitions()
    } else {
      return this.BasicRouteDefinitions()
    }
  }

  private BasicRouteDefinitions = () => (
    <span>
      <Route path="/page" component={PageStatistics} />
      <Route path="/post" component={PostStatistics} />
    </span>
  )

  private PremiumRouteDefinitions = () => (
    <span>
      <Route path="/page" component={PremiumPageStatistics} />
      <Route path="/post" component={PremiumPostStatistics} />
    </span>
  )

  private RedirectIfNotEnabled = (user: UserContainer) => {
    if (user.state.analyticsEnabled) {
      return (
        this.AnalyticsApplicationRoutes(user)
      )
    } else {
      return (<Redirect push={true} to="/" />)
    }
  }
}