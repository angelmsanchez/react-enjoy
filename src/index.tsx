import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './store/config';
import ConnectedIntlProvider from './ConnectedIntlProvider';

const store = configureStore();

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
