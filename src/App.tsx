import * as React from 'react';
import { Route } from 'react-router';

import './App.css';

import Analytics from './Analytics/Analytics';
import DevControls from './DevControls/DevControl';
import HvstHeader from './HvstHeader/HvstHeader';
import User, { UserContainer, UserSubscribe, } from './UserProvider/UserProvider';


const MustLogin = () => (
  <div>u must login</div>
)

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HvstHeader />
        <DevControls />
        <UserSubscribe to={[User]}>
          {(user: UserContainer) => (
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
        </UserSubscribe>

      </div>
    );
  }
}


export default App;
