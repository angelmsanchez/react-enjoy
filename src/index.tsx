import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import { Provider } from 'react-redux';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
