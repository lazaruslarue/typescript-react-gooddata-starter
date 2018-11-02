import * as React from 'react';

import './App.css';

import Analytics from './Analytics/Analytics';
import DevControls from './DevControls/DevControl';
import HvstHeader from './HvstHeader/HvstHeader';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HvstHeader/>
        <Analytics/>
        <DevControls/>
      </div>
    );
  }
}

export default App;
