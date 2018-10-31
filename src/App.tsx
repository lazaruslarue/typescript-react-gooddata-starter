import * as React from 'react';

import './App.css';

import Analytics from './Analytics/Analytics';
import HvstHeader from './HvstHeader/HvstHeader';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HvstHeader/>
        <Analytics/>
      </div>
    );
  }
}

export default App;
