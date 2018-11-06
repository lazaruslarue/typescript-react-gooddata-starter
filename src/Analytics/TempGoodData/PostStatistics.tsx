import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

export default class PostStatistics extends Component {
  public render() {
    return (
      <div>
        Basic Post Stats
        <Visualization
          projectId='t3izalac0vx1rab9avgb0mjicmhlgjvh'
          identifier='acjabr3ZfGHG'
        />
      </div>
    )
  }
}