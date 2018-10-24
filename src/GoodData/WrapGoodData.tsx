import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

export default class FirstChart extends Component {
    
    public render() {
        return (
            <Visualization
            
                projectId='t3izalac0vx1rab9avgb0mjicmhlgjvh'
                uri='aba1JfJggTlf'
            />
        )
        
    }
}

