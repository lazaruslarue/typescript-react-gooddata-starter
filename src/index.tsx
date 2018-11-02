import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { factory } from '@gooddata/gooddata-js';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './UserProvider/UserProvider';

const domain = 'localhost:3000' // TODO: this needs to be ENV... set to GD proxy location on build.
const gooddataSDK = factory({domain})

gooddataSDK.user.isLoggedIn().then((isLogged)=> {
  if (isLogged) {
    ReactDOM.render(
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
    } else {
      window.location.replace(`https://${domain}/account.html?lastUrl=${encodeURIComponent(window.location.href)}`);
    }
  }
);
