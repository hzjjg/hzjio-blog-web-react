import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app/app';
import './index.scss';
import registerServiceWorker from './register_service_worker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();