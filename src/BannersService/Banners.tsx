
import * as React from "react";
import { Container, Provider, ProviderProps, Subscribe, SubscribeProps } from "unstated";
import { IBannerProps, IBannerState } from '../Components/Banner';

interface IBannersContainerState {
  banners: IBannerProps[]
}

export class BannersContainer extends Container<IBannersContainerState> {
  constructor() {
    super();
    this.state = {
      banners: []
    }
  }

  // fetch a banner 
  public async fetchBannerByHash(bannerHash: string | number): Promise<IBannerState> {
    return fetch(`/api/bannerhash/${bannerHash}`)
      .then(resp => resp.json())
      .then(data => data.banner)
      .catch(reason => { throw new Error(reason) })
  }

}

const Banners = new BannersContainer();

export const BannerProvider = (props: ProviderProps) => {
  return <Provider inject={props.inject || [Banners]}>{props.children}</Provider>
}

export const BannerSubscribe = (props: SubscribeProps) => {
  return <Subscribe to={props.to || [Banners]}>{props.children}</Subscribe>
}

export default Banners;