import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import Banner from 'src/Components/Banner';

export default class BannerStatistics extends Component {
  public render() {
    return (
      <div>
        Banner Post Stats
        <Banner bannerHash={260} />
        <Banner bannerHash={181} />

        <Visualization
          projectId='t3izalac0vx1rab9avgb0mjicmhlgjvh'
          identifier='acjabr3ZfGHG'
        />
      </div>
    )
  }
}