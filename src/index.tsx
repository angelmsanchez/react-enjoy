import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './store/config';

import { addLocaleData, IntlProvider } from 'react-intl';

import * as en from 'react-intl/locale-data/en';
import * as es from 'react-intl/locale-data/es';
// import intlMessagesES from './i18n/es.json';
import intlMessagesEN from './i18n/en.json';

addLocaleData([...en, ...es]);

const i18nConfig: any = {
  locale: 'en',
  messages: intlMessagesEN
};
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
