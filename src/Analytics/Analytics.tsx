import * as React from 'react';
import { Component } from 'react'

import { Redirect, Route, } from 'react-router-dom';

import './Analytics.css';

import User, { AuthContainer, AuthSubscribe } from 'src/AuthService/Auth';

import AnalyticsNav from './AnalyticsNav/AnalyticsNav';

import PageStatistics from './TempGoodData/PageStatistics';
import PostStatistics from './TempGoodData/PostStatistics';

import PremiumPageStatistics from './TempGoodData/PageStatistics.Premium';
import PremiumPostStatistics from './TempGoodData/PostStatistics.Premium';

import BannerStatistics from './TempGoodData/BannerStatistics';


export default class Analytics extends Component {
  public render() {
    return (
      <div>
        <AuthSubscribe to={[User]}>
          {(user: AuthContainer) => (
            <div>
              <AnalyticsNav />
              {this.RedirectIfNotEnabled(user)}
              {/* {user.state.premiumAnalytics ? this.AnalyticsApplicationRoutes(user) : this.MustEnableAnalytics()} */}
            </div>
          )
          }
        </AuthSubscribe>
      </div>
    )
  }

  private AnalyticsApplicationRoutes = (user: AuthContainer) => {

    return (
      <span>
        {user.state.hasPremiumAnalytics ? this.PremiumRouteDefinitions() : this.BasicRouteDefinitions()}
        <Route path="/banner-report" component={BannerStatistics} />
      </span>
    )
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

  private RedirectIfNotEnabled = (user: AuthContainer) => {
    if (user.state.hasPageAnalytics || user.state.hasBannerReport) {
      return (
        this.AnalyticsApplicationRoutes(user)
      )
    } else {
      return (<Redirect push={true} to="/" />)
    }
  }
}