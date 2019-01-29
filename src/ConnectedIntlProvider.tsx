import React from 'react';
import { connect } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import intlMessagesES from './i18n/es.json';
import intlMessagesEN from './i18n/en.json';

addLocaleData([...en, ...es]);
const { Provider } = React.createContext({});
interface Props {
  language: string;
  messages: any;
}
interface State {}

class IntlProviderWrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Provider value={this.state}>
        <IntlProvider
          locale={this.props.language}
          messages={this.props.messages}
          defaultLocale="en"
        >
          {this.props.children}
        </IntlProvider>
      </Provider>
    );
  }
}

function mapStateToProps(state: any) {
  const language = state.app.language;
  let messages: any;
  switch (language) {
    case 'es':
      messages = intlMessagesES;
      break;
    case 'en':
      messages = intlMessagesEN;
      break;
    default:
      messages = intlMessagesEN;
  }
  return { language: language, messages: messages };
}

export default connect(mapStateToProps)(IntlProviderWrapper);
