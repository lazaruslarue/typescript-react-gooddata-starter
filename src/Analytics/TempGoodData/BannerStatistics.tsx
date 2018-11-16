import * as React from 'react';
import { Component } from 'react'

import Banner, { IBannerProps } from 'src/Components/Banner';

import { GDBannerStats } from 'src/lib/gooddata-ui-components'
export default class BannerStatistics extends Component {
  // private banners = ["PwQxhbaE",
  //   "PoYyh00o",
  //   "mor1hD0X",
  //   "OXjkhvJo",
  //   "9wBghaDX",
  //   "WwlNhaYo",
  //   "LEgnhqRo",
  //   "PEJPh92X",
  //   "NwZPhmGo",
  //   "xE27hrpw",
  //   "2w6bhzJw",
  //   "ME4Qh7dw",
  //   "7oNlh90w",
  //   "KwPrh2do",
  //   "yXDRh9jE",
  //   "LEdmha2w",
  //   "LX3bhJBw",
  //   "PEJPhW2X",
  //   "2w6bhWJw",
  //   "xEvkhPYw",
  //   "LwnMhpgE"]

  public render() {

    return (
      <div>
        Outside BannerStats
        {/* <Banner bannerHash={0} /> */}
        <GDBannerStats subComponent={this.bannerWrapper} />
      </div>
    )
  }

  private bannerWrapper(props: IBannerProps): JSX.Element {
    return (
      <span>
        <Banner bannerHash={props.bannerHash} />
      </span>

    )
  }
}

