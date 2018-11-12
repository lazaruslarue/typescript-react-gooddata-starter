import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import Banner from 'src/Components/Banner';

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
        Banner Post Stats
        {/* {this.banners.map(b => (<Banner bannerHash={b}></Banner>))} */}
        {/* <Banner bannerHash={"PEJPhW2X"} />
        <Banner bannerHash={"LEdmha2w"} /> */}
        <Banner bannerHash={0} />
        <Banner bannerHash={1} />
        <Visualization
          projectId='t3izalac0vx1rab9avgb0mjicmhlgjvh'
          identifier='acjabr3ZfGHG'
        />
      </div>
    )
  }
}