import * as React from "react";

import './DevControl.css';

import { Button, FormControlLabel, FormGroup } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox'


import User, { UserContainer, UserSubscribe } from "../UserProvider/UserProvider";

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
    <UserSubscribe to={[User]}>
      {(user: UserContainer) => (
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
                  checked={user.state.analyticsEnabled}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ analyticsEnabled: !user.state.analyticsEnabled })}
                />
              }
              label="Analytics Enabled"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.state.premiumAnalytics}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ premiumAnalytics: !user.state.premiumAnalytics })}
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
                  checked={user.state.showBanners}
                  /*  tslint:disable-next-line:jsx-no-lambda */
                  onChange={() => user.setState({ showBanners: !user.state.showBanners })}
                />
              }
              label="Show Banners"
            />
          </FormGroup>
        </div>

      )
      }
    </UserSubscribe>
  )
}

export default DevControls