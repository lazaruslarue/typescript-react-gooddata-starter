
import * as React from "react";
import { Container,Provider,  ProviderProps,Subscribe,  SubscribeProps } from "unstated";

interface IUserState {
  loggedIn: boolean,
  /* extend this with permissions for GD */
}

export class UserContainer extends Container<IUserState> {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  public async login() {
    console.log('loggin in');// tslint:disable-line no-console
    this.setState({loggedIn: true});
  }

  public async logout() {
    console.log('loggin out');// tslint:disable-line no-console
    this.setState({ loggedIn: false})
  }
}

const User = new UserContainer();

export const UserProvider = (props: ProviderProps) => {
  return <Provider inject={props.inject || [User]}>{props.children}</Provider>
}

export const UserSubscribe = (props: SubscribeProps) => {
  return <Subscribe to={props.to || [User]}>{props.children}</Subscribe>
}

export default User;