import * as React from 'react';
import { Route } from 'react-router';

import './App.css';

import Analytics from './Analytics/Analytics';
import DevControls from './DevControls/DevControl';
import HvstHeader from './HvstHeader/HvstHeader';

import Auth, { AuthContainer, AuthSubscribe, } from './AuthService/Auth';


const MustLogin = () => (
  <div>u must login</div>
)

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HvstHeader />
        <DevControls />
        <AuthSubscribe to={[Auth]}>
          {(user: AuthContainer) => (
            <div >
              {/*  tslint:disable-next-line:jsx-no-lambda */}
              <Route path="/" render={() => (
                user.state.loggedIn ? (
                  <Analytics />
                ) : (
                    <MustLogin />
                  )
              )} />
            </div>

          )}
        </AuthSubscribe>

      </div>
    );
  }
}


export default App;
