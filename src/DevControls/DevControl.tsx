import * as React from "react";

import './DevControl.css';

import { Button, FormControlLabel, FormGroup } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox'


import User, { AuthContainer, AuthSubscribe } from "../AuthService/Auth";

export const showDevControls = () => {
  const devNav = document.getElementById('devNav') || null;
  if (devNav) {
    return devNav.style.width = '250px';
  } else {
    return null
  }
}
export const hideDevControls = () => {
  const devNav = document.getElementById('devNav') || null;
  if (devNav) {
    return devNav.style.width = '0px';
  } else {
    return null
  }
}

const DevControls = () => {
  return (
    <AuthSubscribe to={[User]}>
      {(user: AuthContainer) => (
        <div id="devNav">
          <Button onClick={hideDevControls} variant="outlined">X</Button>
          <FormGroup >
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.state.loggedIn}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ loggedIn: !user.state.loggedIn })}
                />
              }
              label="Logged In"
            />
            <FormControlLabel

              control={
                <Checkbox
                  checked={user.state.hasPageAnalytics}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ hasPageAnalytics: !user.state.hasPageAnalytics })}
                />
              }
              label="Analytics Enabled"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.state.hasPremiumAnalytics}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ hasPremiumAnalytics: !user.state.hasPremiumAnalytics })}
                />
              }
              label="Premium Analytics"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.state.showLeadgen}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ showLeadgen: !user.state.showLeadgen })}
                />
              }
              label="Show Leadgen"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.state.hasBannerReport}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ hasBannerReport: !user.state.hasBannerReport })}
                />
              }
              label="Show Banners"
            />
          </FormGroup>
        </div>

      )
      }
    </AuthSubscribe>
  )
}

export default DevControls