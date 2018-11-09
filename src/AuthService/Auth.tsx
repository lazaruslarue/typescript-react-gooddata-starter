
import * as React from "react";
import { Container, Provider, ProviderProps, Subscribe, SubscribeProps } from "unstated";

interface IAuthState {
  loggedIn: boolean,
  /* extend this with permissions for GD */
  hasPageAnalytics: boolean,
  hasPremiumAnalytics: boolean,
  showLeadgen: boolean,
  hasBannerReport: boolean
}

export class AuthContainer extends Container<IAuthState> {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      hasPageAnalytics: false,
      hasPremiumAnalytics: false,
      showLeadgen: false,
      hasBannerReport: true
    }
  }
}

const User = new AuthContainer();

export const AuthProvider = (props: ProviderProps) => {
  return <Provider inject={props.inject || [User]}>{props.children}</Provider>
}

export const AuthSubscribe = (props: SubscribeProps) => {
  return <Subscribe to={props.to || [User]}>{props.children}</Subscribe>
}

export default User;