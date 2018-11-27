import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './register_service_worker';
import AppRouter from './router';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();