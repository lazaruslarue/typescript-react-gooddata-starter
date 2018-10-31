import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { factory } from '@gooddata/gooddata-js';
import { BrowserRouter } from 'react-router-dom';

const domain = 'localhost:3000'
const gooddataSDK = factory({domain})

gooddataSDK.user.isLoggedIn().then((isLogged)=> {
  if (isLogged) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
    } else {
      window.location.replace(`https://${domain}/account.html?lastUrl=${encodeURIComponent(window.location.href)}`);
    }
  }
);
