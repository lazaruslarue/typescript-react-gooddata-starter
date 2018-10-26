import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

export default class FirstChart extends Component {
    
    public render() {
        return (
            <div  style={{ height: 300 }} className="s-visualization-chart">

                <Visualization
                
                    projectId='t3izalac0vx1rab9avgb0mjicmhlgjvh'
                    // identifier='aba1JfJggTlf'
                    uri="/gdc/md/t3izalac0vx1rab9avgb0mjicmhlgjvh/obj/679"
                />
            </div>
        )
        
    }
}