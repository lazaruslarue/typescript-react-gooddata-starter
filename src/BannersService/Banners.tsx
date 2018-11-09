
import * as React from "react";
import { Container, Provider, ProviderProps, Subscribe, SubscribeProps } from "unstated";

interface IBannerState {
  banners: [number]
}

export class BannerContainer extends Container<IBannerState> {
  constructor() {
    super();
    this.state = {
      banners: [260]
    }
    this.getBanner()
  }

  // get a banner 
  private async getBanner() {
    return fetch("/api/get_me_a_banner")

      .then(json => {

        console.log(json)

      })
      .catch(reason => {
        console.log(reason)
      })
  }
}



const Banner = new BannerContainer();

export const BannerProvider = (props: ProviderProps) => {
  return <Provider inject={props.inject || [Banner]}>{props.children}</Provider>
}

export const BannerSubscribe = (props: SubscribeProps) => {
  return <Subscribe to={props.to || [Banner]}>{props.children}</Subscribe>
}

export default Banner;