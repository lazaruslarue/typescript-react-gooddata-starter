import * as React from "react";

import { FormGroup, FormControlLabel } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox'


import User, { UserContainer, UserSubscribe } from "../UserProvider/UserProvider";

const DevControls = () => {
  return (
    <UserSubscribe to={[User]}>
     { (user: UserContainer) => (
       <FormGroup >
         <FormControlLabel
          control={
            <Checkbox 
              checked={user.state.loggedIn} 
              onChange={()=> user.setState({loggedIn: !user.state.loggedIn})}
            />
          }
          label="Logged In"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={user.state.analyticsEnabled} 
              onChange={()=> user.setState({analyticsEnabled: !user.state.analyticsEnabled})}
            />
          }
          label="Analytics Enabled"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={user.state.premiumAnalytics} 
              onChange={()=> user.setState({premiumAnalytics: !user.state.premiumAnalytics})}
            />
          }
          label="Premium Analytics"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={user.state.showLeadgen} 
              onChange={()=> user.setState({showLeadgen: !user.state.showLeadgen})}
            />
          }
          label="Show Leadgen"
        />       
        <FormControlLabel
          control={
            <Checkbox 
              checked={user.state.showBanners} 
              onChange={()=> user.setState({showBanners: !user.state.showBanners})}
            />
          }
          label="Show Banners"
        />
       </FormGroup>

        )
     }
    </UserSubscribe>
  )
}

export default DevControls