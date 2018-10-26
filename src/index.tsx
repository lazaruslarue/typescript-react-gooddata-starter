import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { factory } from '@gooddata/gooddata-js';

const domain = 'localhost:3000'
const sdk = factory({domain})
    // tslint:disable-next-line:no-console
    console.log('opens')
sdk.user.isLoggedIn().then((isLogged)=> {
    // tslint:disable-next-line:no-console
  console.log('sdk returned isLogged: ', isLogged);
  if (isLogged) {
    // tslint:disable-next-line:no-console
    console.log('isLogged');
    ReactDOM.render(
      <App />,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
    } else {
    // tslint:disable-next-line:no-console
      console.log('aintLogged');
      window.location.replace(`https://${domain}/account.html?lastUrl=${encodeURIComponent(window.location.href)}`);
    }
  }
);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();