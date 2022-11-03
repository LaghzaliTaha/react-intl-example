import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {IntlProvider} from "react-intl";
import locale_en from "./translations/en.json";
import locale_nl from "./translations/nl.json";

const data = {
  'nl': locale_nl,
  'en': locale_en
};

let params = (new URL(document.location)).searchParams;
const language = params.get('lng'); 

ReactDOM.render(
  <IntlProvider locale={language} messages={data[language]}>
      <App/>
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
